import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown, ChevronUp } from "lucide-react";
import Aidocument from "@/assets/svg/aidocument";

export default function TopicToolPanel() {
  const [showAdvanced, setShowAdvanced] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0E0B1F] to-[#121025] text-white flex flex-col md:flex-row p-6 gap-6">
      {/* Left Side */}
      <div
        className="md:w-1/2 bg-[#0E0B1F] p-6 rounded-xl shadow-lg space-y-4"
        style={{ boxShadow: "2px 11px 40px 0px rgba(114, 75, 150, 0.32)" }}
      >
        <div>
          <label className="block text-sm mb-1">Topic</label>
          <Textarea
            placeholder="Describe what is your article about"
            className="bg-[#161325] border border-[#2A2550] text-white"
            maxLength={2000}
          />
          <div className="text-right text-xs mt-1 text-gray-400">0/2000</div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Number of Topic</label>
            <Input
              type="number"
              defaultValue={3}
              className="bg-[#161325] border border-[#2A2550] text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Maximum Topic</label>
            <Input
              type="number"
              defaultValue={20}
              className="bg-[#161325] border border-[#2A2550] text-white"
            />
          </div>
        </div>

        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="text-sm text-purple-400 flex items-center gap-1"
        >
          {showAdvanced ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          Advanced Options
        </button>

        {showAdvanced && (
          <div data-aos="fade-down" className="space-y-4">
            <div>
              <label className="block text-sm mb-1">AI Model</label>
              <Input
                defaultValue="open AI / GPT 4.0"
                className="bg-[#161325] border border-[#2A2550] text-white"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Language</label>
              <Input
                defaultValue="English"
                className="bg-[#161325] border border-[#2A2550] text-white"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Writing Tone</label>
              <Input
                defaultValue="Professional"
                className="bg-[#161325] border border-[#2A2550] text-white"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Creativity</label>
              <Input
                defaultValue="Original"
                className="bg-[#161325] border border-[#2A2550] text-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Point of View</label>
                <Input
                  defaultValue="First Person"
                  className="bg-[#161325] border border-[#2A2550] text-white"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Article Length</label>
                <Input
                  defaultValue="-19"
                  className="bg-[#161325] border border-[#2A2550] text-white"
                />
              </div>
            </div>
          </div>
        )}

        <Button className="w-full hover:from-purple-700 hover:to-purple-500">
          Generate Ideas
        </Button>
      </div>

      {/* Right Side */}
      <div
        className="md:w-1/2 bg-[#0B0A1C] p-6 rounded-xl shadow-lg flex flex-col justify-between"
        style={{ boxShadow: "2px 11px 40px 0px rgba(114, 75, 150, 0.32)" }}
      >
        <div
          className="text-center flex items-center gap-2 mb-4 text-white font-medium font-['spa'] text-md border border-[#65306a] rounded-lg py-2 px-4"
          style={{
            background:
              "linear-gradient(180deg, rgba(122, 67, 164, 0.30) 0%, rgba(96, 73, 188, 0.17) 100%)",
          }}
        >
          <span className="p-2 rounded-full border border-[#7A43A4] flex items-center justify-center mr-2">
            <Aidocument />{" "}
          </span>{" "}
          Add a Topic to Generate Magic
        </div>

        <div className="flex-grow">
          <Textarea
            placeholder="Generated code or content will appear here..."
            className="w-full h-full min-h-[300px] bg-[#161325] border border-[#65306a] text-white resize-none"
          />
        </div>

        <div className="flex justify-between mt-6 space-x-4">
          <Button
            variant="outline"
            className="w-1/2 border-purple-500 text-purple-300 hover:bg-purple-900"
          >
            Back
          </Button>
          <Button className="w-1/2 bg-purple-600 hover:bg-purple-700">
            Next Step
          </Button>
        </div>
      </div>
    </div>
  );
}
