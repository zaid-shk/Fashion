"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CreditCard, Landmark, MapPin, Wallet } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { selectIsAuthenticated, selectUser } from "@/lib/redux/slices/userSlice";
import { clearCart } from "@/lib/redux/slices/cartSlice";
import Button from "@/components/ui/Button";
import toast from "react-hot-toast";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type PaymentMethod = "card" | "paypal" | "bank";

type OrderSummary = {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

/** Calculate order totals from cart items */
const calcSummary = (items: { priceNum: number; quantity: number }[]): OrderSummary => {
  const subtotal = items.reduce((sum, i) => sum + i.priceNum * i.quantity, 0);
  const shipping = subtotal >= 10000 ? 0 : 499; // Free shipping over $100
  const tax = Math.round(subtotal * 0.08);       // 8% tax
  return { subtotal, shipping, tax, total: subtotal + shipping + tax };
};

/** Format number as USD price string */
const fmtPrice = (n: number) => `$${(n / 100).toFixed(2)}`;

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function CheckoutPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  /* ---- Redux state ---- */
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const user = useAppSelector(selectUser);
  const cartItems = useAppSelector((s) => s.cart.items);

  /* ---- Local state ---- */
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);
  const [placing, setPlacing] = useState(false);
  const [redirecting, setRedirecting] = useState(true); // guards flash of UI

  /* ================================================================ */
  /*  GUARD 1 – Auth check                                             */
  /*  Why: Only authenticated users can place an order. Unauthenticated */
  /*  access to /checkout is blocked by redirecting to /login.         */
  /* ================================================================ */
  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/login");
    } else {
      setRedirecting(false);
    }
  }, [isAuthenticated, router]);

  /* ================================================================ */
  /*  GUARD 2 – Empty cart check                                       */
  /*  Why: No point showing checkout with zero items. Redirect to cart */
  /*  so the user can add products first.                              */
  /* ================================================================ */
  useEffect(() => {
    if (!redirecting && isAuthenticated && cartItems.length === 0) {
      router.replace("/cart");
    }
  }, [redirecting, isAuthenticated, cartItems, router]);

  /* ---- Derive order summary from cart ---- */
  const summary = calcSummary(cartItems);

  /* ---- Guard: can place order? ---- */
  const canPlace = selectedAddress !== null && paymentMethod !== null && !placing;

  /* ================================================================ */
  /*  PLACE ORDER handler                                               */
  /*  Why: Double-validation before submission prevents invalid orders */
  /*  even if the UI button somehow becomes enabled prematurely.       */
  /* ================================================================ */
  const handlePlaceOrder = async () => {
    // ---- Client-side re-validation (belt & suspenders) ----
    if (!isAuthenticated) {
      toast.error("You must be logged in to place an order.");
      router.replace("/login");
      return;
    }
    if (cartItems.length === 0) {
      toast.error("Your cart is empty.");
      router.replace("/cart");
      return;
    }
    if (!selectedAddress) {
      toast.error("Please select a delivery address.");
      return;
    }
    if (!paymentMethod) {
      toast.error("Please select a payment method.");
      return;
    }

    setPlacing(true);

    try {
      /* ---- Simulate API call (replace with actual order endpoint) ---- */
      await new Promise((resolve) => setTimeout(resolve, 2000));

      dispatch(clearCart());
      toast.success("Order placed successfully!");
      router.push("/");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setPlacing(false);
    }
  };

  /* ---- While guards are resolving, show nothing (prevents flash) ---- */
  if (redirecting) return null;

  /* ---- Empty cart fallback (shouldn't render due to guard, but safe) ---- */
  if (cartItems.length === 0) return null;

  /* ================================================================ */
  /*  RENDER                                                            */
  /* ================================================================ */
  return (
    <main className="min-h-screen px-4 md:px-8 lg:px-16 py-10 md:py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* -------------------------------------------------------- */}
          {/*  LEFT COLUMN  —  Address & Payment                        */}
          {/* -------------------------------------------------------- */}
          <div className="lg:col-span-2 space-y-10">

            {/* ---------- Address Selection ---------- */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={20} />
                <h2 className="text-xl font-semibold">Delivery Address</h2>
              </div>

              {/* If user has a saved address, show it as a selectable card */}
              {user?.address ? (
                <button
                  onClick={() =>
                    setSelectedAddress(
                      selectedAddress === "saved" ? null : "saved",
                    )
                  }
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    selectedAddress === "saved"
                      ? "border-black bg-neutral-50"
                      : "border-neutral-200"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-neutral-600">
                        {user.address.street}, {user.address.city},{" "}
                        {user.address.state} {user.address.zip}
                      </p>
                    </div>
                  </div>
                </button>
              ) : (
                /* No saved address — prompt to add one */
                <p className="text-sm text-neutral-500">
                  No address on file. Please add one in your account settings.
                </p>
              )}
            </section>

            {/* ---------- Payment Method Selection ---------- */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <CreditCard size={20} />
                <h2 className="text-xl font-semibold">Payment Method</h2>
              </div>

              <div className="space-y-3">
                {([
                  { value: "card", label: "Credit / Debit Card", icon: CreditCard },
                  { value: "paypal", label: "PayPal", icon: Wallet },
                  { value: "bank", label: "Bank Transfer", icon: Landmark },
                ] as const).map(({ value, label, icon: Icon }) => (
                  <button
                    key={value}
                    onClick={() => setPaymentMethod(value)}
                    className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                      paymentMethod === value
                        ? "border-black bg-neutral-50"
                        : "border-neutral-200"
                    }`}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{label}</span>
                  </button>
                ))}
              </div>
            </section>
          </div>

          {/* -------------------------------------------------------- */}
          {/*  RIGHT COLUMN  —  Order Summary + Place Order Button      */}
          {/* -------------------------------------------------------- */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 border border-neutral-200 rounded-xl p-6 space-y-5">
              <h2 className="text-lg font-semibold">Order Summary</h2>

              {/* ---- Cart items preview ---- */}
              <div className="space-y-3 max-h-56 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-14 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.title}</p>
                      <p className="text-xs text-neutral-500">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-medium">{fmtPrice(item.priceNum * item.quantity)}</p>
                  </div>
                ))}
              </div>

              <hr className="border-neutral-200" />

              {/* ---- Price breakdown ---- */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span>{fmtPrice(summary.subtotal)}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Shipping</span>
                  <span>{summary.shipping === 0 ? "FREE" : fmtPrice(summary.shipping)}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Tax (8%)</span>
                  <span>{fmtPrice(summary.tax)}</span>
                </div>
                <hr className="border-neutral-200" />
                <div className="flex justify-between font-semibold text-base">
                  <span>Total</span>
                  <span>{fmtPrice(summary.total)}</span>
                </div>
              </div>

              {/* ---- Place Order button ---- */}
              <Button
                className="w-full py-3 rounded-xl"
                disabled={!canPlace}
                loading={placing}
                onClick={handlePlaceOrder}
              >
                {placing ? "Placing Order…" : "Place Order"}
              </Button>

              {!canPlace && !placing && (
                <p className="text-xs text-neutral-400 text-center">
                  Select an address and payment method to continue.
                </p>
              )}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
