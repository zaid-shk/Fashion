import "./globals.css";
import type { Metadata } from "next";
import NavbarWrapper from "@/components/layout/NavbarWrapper";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/providers/LenisProvider";
import CursorProvider from "@/components/providers/CursorProvider";
import StoreProvider from "@/lib/StoreProvider";

export const metadata: Metadata = {
  title: "Fashion",
  description: "Created By LOL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased cursor-none">
      <body>
        <StoreProvider>
          <LenisProvider>
            <CursorProvider>
              <NavbarWrapper />
              {children}
              <Footer />
            </CursorProvider>
          </LenisProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
