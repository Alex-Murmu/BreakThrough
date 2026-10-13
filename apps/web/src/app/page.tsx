"use client";

import { useState } from "react";
import { trpc } from "@/trpc/provider";

export default function Home() {
  const [health, setHealth] = useState<{ status: string; service: string } | null>(null);

  const handleClick = async () => {
    const result = await trpc.health.query();
    setHealth(result);
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-4">
      <button onClick={handleClick} className="border p-2 rounded-xl bg-white text-black font-bold">
        Get health
      </button>
      {health && (
        <pre className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-xl text-sm">
          {JSON.stringify(health, null, 2)}
        </pre>
      )}
    </div>
  );
}
