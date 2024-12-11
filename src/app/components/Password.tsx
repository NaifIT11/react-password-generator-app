"use client";

import { Copy } from "lucide-react";
import { useState } from "react";
import { Slider } from "./Slider";

export default function PasswordClient() {
  const [length, setLength] = useState(0);
  const [password, setPassword] = useState<string>("password");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  return (
    <div className="w-[50vw] p-4">
      <h1 className="text-xl text-center mb-4">Password Generator</h1>
      <div className="flex justify-between border border-indigo-400 p-4 mb-4">
        <h2 className="text-xl font-bold text-indigo-300">{password}</h2>
        <button aria-label="Copy Password">
          <Copy className="w-4 h-4 text-indigo-500" />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="border border-indigo-500 p-4">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <h3 className="text-sm">chacracter length</h3>
              <h1 className="text-xl text-indigo-500">{length}</h1>
            </div>
            <Slider
              value={[length]}
              onValueChange={([length]) => setLength(length)}
              style={{ width: "100%" }}
            />
          </div>
          <button type="submit" className="mt-4 w-full py-3 bg-indigo-300 hover:bg-indigo-500 text-white inline-flex justify-center items-center uppercase" style={{letterSpacing: "12px"}}>generate</button>
      </form>
    </div>
  );
}
