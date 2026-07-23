"use client";

import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/redux/hooks";
import { setUser } from "@/lib/redux/slices/userSlice";
import Button from "@/components/ui/Button";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleMockLogin = () => {
    dispatch(
      setUser({
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        address: {
          street: "123 Fashion Avenue",
          city: "New York",
          state: "NY",
          zip: "10001",
          country: "US",
        },
      }),
    );
    toast.success("Logged in!");
    router.push("/");
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-sm w-full text-center space-y-6">
        <h1 className="text-3xl font-semibold">Login</h1>
        <p className="text-neutral-500 text-sm">Demo login — click below to authenticate.</p>
        <Button className="w-full py-3" onClick={handleMockLogin}>
          Login as John Doe
        </Button>
      </div>
    </main>
  );
}
