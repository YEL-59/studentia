import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Howitwork from "@/assets/svg/howitwork";
import React from "react";

const steps = [
  {
    step: 1,
    title: "Choose your AI Tool",
    description:
      "Browse and select the AI tool that suits your needs. Each tool is designed for a specific task.",
  },
  {
    step: 2,
    title: "Customize & Input",
    description:
      "Provide your input or preferences. The tool adapts to your needs instantly.",
  },
  {
    step: 3,
    title: "Get Results Instantly",
    description:
      "Get AI-generated results instantly and refine them as needed.",
  },
];

const HowItWork = () => {
  return (
    <section className="bg-[#070622] py-20 text-center px-4">
      <h2 className="text-white text-3xl font-bold mb-2">How does it work?</h2>
      <p className="text-white/80 mb-12">Start Writing in 3 Easy Steps</p>

      <div className="flex flex-col md:flex-row items-stretch justify-center gap-6">
        {steps.map(({ step, title, description }) => (
          <Card
            key={step}
            className="relative w-full max-w-sm h-full min-h-[220px] text-center border-[#7A43A4] bg-gradient-to-b from-[rgba(43,43,43,0.08)] to-[rgba(32,32,32,0)] backdrop-blur p-6 flex flex-col justify-between"
          >
            {/* Background SVG centered */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
              <Howitwork className="w-32 h-32 opacity-20" />
            </div>

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col h-full justify-start">
              <CardHeader>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#7A43A4] text-white flex items-center justify-center text-xl font-bold">
                  {step}
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white/80">{description}</p>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HowItWork;
