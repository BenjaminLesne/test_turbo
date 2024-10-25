"use client";

// import getInfo from "@/lib/actions";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [items, setItems] = useState([0, 1, 2, 3, 4]);
  // const data = await getInfo();
  const stuff = "";

  useEffect(() => {
    setItems((x) => [...x].reverse());
  }, [items]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      {/* <div>{data.data}</div> */}
    </main>
  );
}
