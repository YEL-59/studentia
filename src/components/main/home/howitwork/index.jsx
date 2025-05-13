import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Howitwork from "@/assets/svg/howitwork";
import React, { useEffect } from "react";
import Howitworknumber from "@/assets/svg/howitworknumber";
import circlebg from "../../../../assets/howitworkbg.png";
import LogoMarquee from "../logomarque";
import AOS from "aos";
import "aos/dist/aos.css";
import darkBgCircle from '@/assets/dark-circle.png';

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
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="bg-[#070622] dark:bg-[#F9F9F9] py-10  text-center px-4">
      <div className="container mx-auto md:mb-10">
        <LogoMarquee />
      </div>
      <h2
        className="text-3xl md:text-[64px] leading-[132%] tracking-[-0.64px] font-grotesk font-bold text-white dark:text-[#070622]"
        style={{ fontFamily: 'var(--font-grotesk)' }}
        data-aos="fade-down"
        data-aos-delay="200"
      >
        How does it work?
      </h2>
      <p
        className="text-[12px] md:text-[20px] leading-[132%] tracking-[-0.4px] font-medium font-grotesk text-center text-[#F9F9F9] dark:text-[#1C202B] mb-10"
        style={{ fontFamily: 'var(--font-grotesk)' }}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Start Writing in 3 Easy Steps
      </p>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map(({ step, title, description }) => (
          <Card
            key={step}
            className="relative w-full h-full min-h-[260px] text-center border-[#7A43A4] bg-gradient-to-b from-[rgba(43,43,43,0.08)] to-[rgba(32,32,32,0)] backdrop-blur p-6 flex flex-col justify-between"
            data-aos="zoom-in"
            data-aos-delay={`${step * 200}`}
            data-aos-duration="800"
          >
            {/* Background SVG centered */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
              <Howitwork className="w-32 h-32 opacity-20" />
            </div>

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col h-full justify-start">
              <CardHeader>
                <div className="relative w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <div className="absolute inset-0 z-0">
                    <img
                      src={circlebg}
                      alt="Step background"
                      className="block dark:hidden"
                    />

                    {/* Dark mode image */}
                    <img
                      src={darkBgCircle}
                      alt="Step background"
                      className="hidden dark:block"
                    />
                  </div>
                  <span className="relative z-10 text-white text-center text-[63.546px] not-italic font-bold font-['ADLaM_Display'] leading-[112%] tracking-[-1.271px]">
                    {step}
                  </span>
                </div>

                <h3 className="text-[var(--60-background-website,#FFF)] dark:text-[#070622] font-['Space_Grotesk'] text-center text-[15px] md:text-[24px] not-italic font-bold leading-[132%] tracking-[-0.24px]">
                  {title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-[#9A98B9] dark:text-[#070622] text-center font-['Space_Grotesk'] text-[11px] md:text-[16px] not-italic font-normal leading-[164%]">
                  {description}
                </p>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HowItWork;
