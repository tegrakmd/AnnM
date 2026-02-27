"use client";

import { Button } from "@/components/ui/button";

import { useState } from "react";

export function Account() {
  const [count, setCount] = useState(1);
  const AddCounter = () => {
    setCount(count + 1);
  };
  const MiniseCounter = () => {
    setCount(count - 1);
  };
  return (
    <div className="h-dvh flex items-center w-full align-center">
      <div className="flex items-center gap-2 mx-auto text-3xl">
        <Button
          onClick={MiniseCounter}
          className="py-2 px-4"
          variant={"outline"}>
          -
        </Button>
        <span className="text-4xl  font-mono text-black dark:text-indigo-500">
          {count}
        </span>
        <Button onClick={AddCounter} className="py-2 px-4" variant={"outline"}>
          +
        </Button>
      </div>
    </div>
  );
}
