import { Card, CardContent, CardHeader } from "@/components/ui/card";
import clsx from "clsx";
import articleDefault from "@/assets/ultimatecard.png";
import articleHover from "@/assets/ultimatehovercard.png";
import { Button } from "@/components/ui/button";
import Ultimatesvg1 from "@/assets/svg/ultimatesvg1";
import { useState } from "react";
import Ultimatesvg2 from "@/assets/svg/ultimatesvg2";
import Ultimatesvg3 from "@/assets/svg/ultimatesvg3";
import Ultimatesvg4 from "@/assets/svg/ultimatesvg4";
import Ultimatesvg5 from "@/assets/svg/ultimatesvg5";
import Ultimatesvg6 from "@/assets/svg/ultimatesvg6";

const tools = [
  {
    title: "Article Generator",
    description:
      "Turn a title and outline text into a fully complete high quality article within seconds",
    bgDefault: articleDefault,
    bgHover: articleHover,
    Icon: Ultimatesvg1,
    defaultColor: "#4F46E5",
  },
  {
    title: "Content Rewriter",
    description:
      "Take a piece of content and rewrite it to make it more interesting, creative, and engaging",
    bgDefault: articleDefault,
    bgHover: articleHover,
    Icon: Ultimatesvg2,
    defaultColor: "#5362FF",
  },
  {
    title: "Article Generator",
    description:
      "Turn a title and outline text into a fully complete high quality article within seconds",
    bgDefault: articleDefault,
    bgHover: articleHover,
    Icon: Ultimatesvg3,
    defaultColor: "#A687DB",
  },
  {
    title: "Content Rewriter",
    description:
      "Take a piece of content and rewrite it to make it more interesting, creative, and engaging",
    bgDefault: articleDefault,
    bgHover: articleHover,
    Icon: Ultimatesvg4,
    defaultColor: "#DAB72A",
  },
  {
    title: "Article Generator",
    description:
      "Turn a title and outline text into a fully complete high quality article within seconds",
    bgDefault: articleDefault,
    bgHover: articleHover,
    Icon: Ultimatesvg5,
    defaultColor: "#FF6726",
  },
  {
    title: "Content Rewriter",
    description:
      "Take a piece of content and rewrite it to make it more interesting, creative, and engaging",
    bgDefault: articleDefault,
    bgHover: articleHover,
    Icon: Ultimatesvg6,
    defaultColor: "#C40400",
  },
  {
    title: "Article Generator",
    description:
      "Turn a title and outline text into a fully complete high quality article within seconds",
    bgDefault: articleDefault,
    bgHover: articleHover,
    Icon: Ultimatesvg5,
    defaultColor: "#FF6726",
  },
  {
    title: "Content Rewriter",
    description:
      "Take a piece of content and rewrite it to make it more interesting, creative, and engaging",
    bgDefault: articleDefault,
    bgHover: articleHover,
    Icon: Ultimatesvg6,
    defaultColor: "#C40400",
  },
];

export default function UltimateModel() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);

  return (
    <section className="bg-[#070622] text-center py-10 px-4 text-white">
      <h2
        className="text-3xl md:text-[64px] leading-[132%] tracking-[-0.64px] font-grotesk font-bold text-white"
        style={{ fontFamily: "var(--font-grotesk)" }}
        data-aos="fade-down"
        data-aos-delay="200"
      >
        Unlimited models to get started
      </h2>
      <p
        className="text-[20px] leading-[132%] tracking-[-0.4px] font-medium font-grotesk text-center text-[#F9F9F9] mb-10"
        style={{ fontFamily: "var(--font-grotesk)" }}
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Custom models
      </p>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-7 justify-center items-stretch">
        {tools
          .slice(0, visibleCount)
          .map(
            (
              { title, description, bgDefault, bgHover, Icon, defaultColor },
              idx
            ) => (
              <div
                key={idx}
                className="relative w-full group rounded-xl overflow-hidden "
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                // data-aos="fade-up"
                data-aos-delay={200 + idx * 100}
                data-aos-duration="800"
                data-aos={idx % 2 === 0 ? "fade-up" : "zoom-in"}
              >
                <Card
                  className={clsx(
                    "relative z-10 bg-transparent border p-6  backdrop-blur h-full flex flex-col justify-between",
                    hoveredIdx === idx
                      ? "border-[#82C8E5]"
                      : `border-[${defaultColor}]`
                  )}
                >
                  <div
                    className={clsx(
                      "absolute inset-0 z-0 transition-opacity duration-500 bg-cover bg-center",
                      "group-hover:opacity-0"
                    )}
                    style={{ backgroundImage: `url(${bgDefault})` }}
                  />
                  <div
                    className={clsx(
                      "absolute inset-0 z-0 opacity-0 transition-opacity duration-500 bg-cover bg-center",
                      "group-hover:opacity-100"
                    )}
                    style={{ backgroundImage: `url(${bgHover})` }}
                  />

                  <CardHeader>
                    <div
                      className={clsx(
                        "flex w-[70px] h-[70px] p-[14px] justify-center items-center gap-2 border-2 flex-shrink-0 aspect-square rounded-[28px]",
                        hoveredIdx === idx
                          ? "bg-[rgba(130,200,229,0.10)]"
                          : "bg-[rgba(130,200,229,0.05)]"
                      )}
                      style={{
                        borderColor:
                          hoveredIdx === idx ? "#82C8E5" : defaultColor,
                      }}
                    >
                      <Icon
                        hovered={hoveredIdx === idx}
                        defaultColor={defaultColor}
                      />
                    </div>
                  </CardHeader>

                  <div className="relative z-10">
                    <CardContent className="text-left space-y-3 flex-grow">
                      <h3 className="text-[18px] turncate md:text-[40px] font-medium leading-[132%] tracking-[-0.8px] text-[var(--60-background-website,#FFF)] font-['Space_Grotesk']">
                        {title}
                      </h3>
                      <p className="text-[12px] md:text-[20px] font-normal leading-[164%] text-[var(--Light-Neutrals-Website,#BCBCBC)] font-['Space_Grotesk']">
                        {description}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </div>
            )
          )}
      </div>
      <div className="flex flex-col items-center text-center justify-center w-full h-full mt-10">
        <Button
          onClick={() => {
            setVisibleCount(visibleCount === tools.length ? 3 : tools.length);
          }}
        >
          {visibleCount === tools.length ? "See Less" : "See More"}
        </Button>
      </div>
    </section>
  );
}
