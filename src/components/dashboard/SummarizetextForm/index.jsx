import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function SummarizetextForm() {
  const [text, setText] = useState("");

  return (
    <div
      className="max-w-md mx-auto bg-[#1e1e2f] text-white rounded-2xl shadow-lg p-6 space-y-6"
      style={{ boxShadow: "2px 11px 40px 0px rgba(114, 75, 150, 0.32)" }}
    >
      <div>
        <h2 className="text-white font-bold text-[24px] leading-[132%] tracking-[-0.24px] font-['Space_Grotesk'] flex items-center gap-2">
          <span className="flex w-[40px] h-[40px] p-[14px] justify-center items-center gap-2 aspect-square rounded-[28px] border-2 border-[#7A43A4] bg-gradient-to-b from-[rgba(122,67,164,0.3)] to-[rgba(96,73,188,0.17)]">
            🌀
          </span>{" "}
          Summarize text Form
        </h2>
        <p className="text-[#BCBCBC] font-normal text-[16px] leading-[164%] font-['Space_Grotesk'] mt-2">
          Take a piece of content and rewrite it to make it more interesting,
          creative, and engaging
        </p>
      </div>

      <div className="rounded-[16px] bg-gradient-to-b from-[rgba(122,67,164,0.3)] to-[rgba(96,73,188,0.17)] text-white px-4 py-[10px]  text-sm w-full">
        <span className="text-[#BCBCBC] font-normal text-[18px] leading-[164%] font-['Space_Grotesk']">
          {" "}
          Your balance is <strong>3.4k</strong> Words
        </span>
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          {" "}
          <label className="block text-white font-medium text-[14px] leading-[164%] capitalize font-['Space_Grotesk'] mb-1">
            What Would You Like To Rewrite?
          </label>
          <div className="text-right text-sm text-gray-400 mt-1">
            {text.length}/8000
          </div>
        </div>
        <textarea
          className="w-full h-40 p-4 rounded-lg bg-[#2a2a3b] text-sm resize-none outline-none"
          maxLength={8000}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text to rewrite"
        />
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-[12px] mb-1">Number of result</label>
          <input
            type="number"
            className="w-full px-3 py-2 rounded-lg bg-[#2a2a3b] text-sm outline-none"
            defaultValue={1}
          />
        </div>
        <div className="flex-1">
          <label className="block text-[12px] mb-1">
            Estimated Result Length
          </label>
          <input
            type="number"
            className="w-full px-3 py-2 rounded-lg bg-[#2a2a3b] text-sm outline-none"
            defaultValue={2000}
          />
        </div>
      </div>

      <Button className="w-full py-5 mt-2 mb-10 rounded-lg hover:bg-gradient-to-r from-purple-500 to-indigo-600  hover:opacity-90 transition-all text-[#F9F9F9] text-center font-medium text-[16px] leading-[164%] capitalize font-['Space_Grotesk']">
        Generate
      </Button>
    </div>
  );
}
