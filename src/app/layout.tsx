import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/LenisProvider";
import CursorProvider from "@/components/CursorProvider";

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
        <LenisProvider>
          <CursorProvider>
            <Navbar />
            {children}
            <Footer />
          </CursorProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
