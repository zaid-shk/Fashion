"use client";

import { useState } from "react";
import SecondNav from "@/components/layout/SecondNav";

export default function WomenPage() {
  const [count] = useState({ result: 0, total: 0 });
  return (
    <main className="min-h-screen p-8">
      <SecondNav result={count.result} maxResult={count.total} />
      <h1 className="text-2xl font-semibold">Women Collection</h1>
      <p className="mt-2 text-gray-600">This page is now available.</p>
    </main>
  );
}
