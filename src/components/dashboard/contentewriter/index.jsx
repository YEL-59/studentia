import React, { useState } from "react";

export default function ContentRewriter() {
  const [text, setText] = useState("");

  return (
    <div
      className="max-w-md mx-auto bg-[#1e1e2f] text-white rounded-2xl shadow-lg p-6 space-y-6"
      style={{ boxShadow: "2px 11px 40px 0px rgba(114, 75, 150, 0.32)" }}
    >
      <div>
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <span>🌀</span> Content Rewriter
        </h2>
        <p className="text-sm text-gray-400">
          Take a piece of content and rewrite it to make it more interesting,
          creative, and engaging
        </p>
      </div>

      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm w-fit">
        Your balance is <strong>3.4k</strong> Words
      </div>

      <div>
        <label className="block text-sm mb-1">
          What Would You Like To Rewrite?
        </label>
        <textarea
          className="w-full h-40 p-4 rounded-lg bg-[#2a2a3b] text-sm resize-none outline-none"
          maxLength={8000}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text to rewrite"
        />
        <div className="text-right text-xs text-gray-400 mt-1">
          {text.length}/8000
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm mb-1">Number of result</label>
          <input
            type="number"
            className="w-full px-3 py-2 rounded-lg bg-[#2a2a3b] text-sm outline-none"
            defaultValue={1}
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm mb-1">Estimated Result Length</label>
          <input
            type="number"
            className="w-full px-3 py-2 rounded-lg bg-[#2a2a3b] text-sm outline-none"
            defaultValue={2000}
          />
        </div>
      </div>

      <button className="w-full py-3 mt-2 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold hover:opacity-90 transition-all">
        Generate
      </button>
    </div>
  );
}
