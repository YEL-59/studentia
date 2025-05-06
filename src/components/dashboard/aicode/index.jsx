import Codedocument from "@/assets/svg/codedocument";
import Download from "@/assets/svg/download";
import Savdoc from "@/assets/svg/savdoc";
import { Button } from "@/components/ui/button";
import React, { useState, useRef } from "react";

export default function AiCodeGenerator() {
  const [language, setLanguage] = useState("Python");
  const [instruction, setInstruction] = useState("");
  const fileInputRef = useRef(null);
  const textAreaRef = useRef(null);

  const handleNewCode = () => {
    setInstruction("");
    setLanguage("Python");
  };

  const handleUploadPDF = () => {
    fileInputRef.current.click();
  };

  const handleSaveLocal = () => {
    localStorage.setItem("savedCode", instruction);
    alert("Code saved locally!");
  };

  const handleDownload = () => {
    const blob = new Blob([instruction], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "generated_code.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex min-h-screen gap-5 text-white">
      {/* Left Panel */}
      <div className="w-2/3 p-4">
        <div
          className="flex items-center gap-4 mb-4 border rounded-lg p-2 bg-[#1C202B]"
          style={{ boxShadow: "2px 11px 40px 0px rgba(114, 75, 150, 0.32)" }}
        >
          <button
            onClick={handleNewCode}
            className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700"
          >
            New Code
          </button>

          <span
            className="p-2 rounded-lg border border-[#7A43A4] hover:bg-[#7A43A4] flex items-center justify-center "
            onClick={handleUploadPDF}
            title="Upload PDF"
          >
            <Codedocument />
          </span>

          <span
            onClick={handleSaveLocal}
            title="Save to Local"
            className="p-2 rounded-lg border border-[#7A43A4] hover:bg-[#7A43A4] flex items-center justify-center "
          >
            <Savdoc />
          </span>

          <span
            onClick={handleDownload}
            title="Download Code"
            className="p-2 rounded-lg border  border-[#7A43A4] hover:bg-[#7A43A4] flex items-center justify-center "
          >
            <Download />
          </span>

          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="application/pdf"
          />
        </div>

        <div
          className="bg-[#181824] h-[90%] flex items-center justify-center text-center text-gray-400 text-xl rounded"
          style={{ boxShadow: "2px 11px 40px 0px rgba(114, 75, 150, 0.32)" }}
        >
          {instruction ? (
            <textarea
              ref={textAreaRef}
              className="w-full h-full bg-transparent text-white p-4 resize-none focus:outline-none"
              value={instruction}
              onChange={(e) => setInstruction(e.target.value)}
            />
          ) : (
            "Generate Your Code Easily"
          )}
        </div>
      </div>

      {/* Right Panel */}
      <div
        className="w-1/3 bg-[#1f1f2e] p-6 space-y-6 rounded-l-xl"
        style={{ boxShadow: "2px 11px 40px 0px rgba(114, 75, 150, 0.32)" }}
      >
        <h2 className="text-lg font-semibold">🧠 AI Code Generator</h2>
        <p className="text-sm text-gray-400">
          Create quality content effortlessly with AI
        </p>
        <div
          className="text-sm border border-[#7A43A4] bg-gradient-to-b from-[rgba(122,67,164,0.30)] to-[rgba(96,73,188,0.17)] text-white p-4 rounded-lg flex items-center justify-center mb-4"
          style={{ boxShadow: "2px 11px 40px 0px rgba(114, 75, 150, 0.32)" }}
        >
          Your Balance: <span className="text-purple-400">13.4k Words</span>
        </div>

        <div>
          <label className="block text-sm mb-1">Program</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full bg-gray-800 p-2 rounded text-white"
          >
            <option>Python</option>
            <option>JavaScript</option>
            <option>Java</option>
            <option>C++</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Provide Instruction</label>
          <textarea
            className="w-full bg-gray-800 p-2 rounded text-white"
            placeholder="Specify what kind of function or code you want..."
            value={instruction}
            onChange={(e) => setInstruction(e.target.value)}
            rows={6}
          />
        </div>

        <Button className=" hover:bg-purple-700 w-full py-2 rounded">
          Generate Code
        </Button>
      </div>
    </div>
  );
}
