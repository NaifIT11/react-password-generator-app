"use client";

import { Copy } from "lucide-react";

export default function PasswordClient() {
  return (
    <div className="w-[50vw] p-4">
      <h1 className="text-xl text-center mb-4">Password Generator</h1>
      <div className="flex justify-between border border-indigo-400 p-4 mb-4">
        <h2 className="text-xl font-bold text-indigo-300">password</h2>
        <button aria-label="Copy Password">
            <Copy className="w-4 h-4 text-indigo-500" />
        </button>
      </div>
      <div className="border border-indigo-500 p-4">
         <div className="flex gap-2">
            
         </div>
      </div>
    </div>
  );
}
