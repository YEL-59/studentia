import { Card, CardContent, CardHeader } from "@/components/ui/card";
import clsx from "clsx";
import articleDefault from "@/assets/ultimatecard.png";
import articleHover from "@/assets/ultimatehovercard.png";
import { useState } from "react";
import { Star } from "lucide-react";

import Ultimatesvg1 from "@/assets/svg/ultimatesvg1";
import Ultimatesvg2 from "@/assets/svg/ultimatesvg2";
import Ultimatesvg3 from "@/assets/svg/ultimatesvg3";
import Ultimatesvg4 from "@/assets/svg/ultimatesvg4";
import Ultimatesvg5 from "@/assets/svg/ultimatesvg5";
import Ultimatesvg6 from "@/assets/svg/ultimatesvg6";
import { useNavigate } from "react-router";

export const tools = [
  {
    title: "Article Generator",
    path: "articelgenerate",
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
    title: "Article Generator 2",
    description: "Another powerful generator for long-form articles",
    bgDefault: articleDefault,
    bgHover: articleHover,
    Icon: Ultimatesvg3,
    defaultColor: "#A687DB",
  },
  {
    title: "Content Rewriter 2",
    description: "Better, smarter rewriting tools",
    bgDefault: articleDefault,
    bgHover: articleHover,
    Icon: Ultimatesvg4,
    defaultColor: "#DAB72A",
  },
  {
    title: "Article Generator Pro",
    description: "Pro version with advanced AI",
    bgDefault: articleDefault,
    bgHover: articleHover,
    Icon: Ultimatesvg5,
    defaultColor: "#FF6726",
  },
  {
    title: "Content Rewriter Pro",
    description: "Best for SEO optimized rewriting",
    bgDefault: articleDefault,
    bgHover: articleHover,
    Icon: Ultimatesvg6,
    defaultColor: "#C40400",
  },
];

export default function Aiwritergrid({ tools, favorites, setFavorites }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const navigate = useNavigate();

  const toggleFavorite = (title) => {
    if (favorites.includes(title)) {
      setFavorites(favorites.filter((fav) => fav !== title));
    } else {
      setFavorites([...favorites, title]);
    }
  };

  return (
    <section className="text-center px-4 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-7 justify-center items-stretch">
        {tools.map(
          (
            {
              title,
              path,
              description,
              bgDefault,
              bgHover,
              Icon,
              defaultColor,
            },
            idx
          ) => (
            <div
              key={idx}
              className="relative w-full group rounded-xl overflow-hidden"
              onClick={() => navigate(`/ai-assistant/${path}`)}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              data-aos-delay={200 + idx * 100}
              data-aos-duration="800"
              data-aos={idx % 2 === 0 ? "fade-up" : "zoom-in"}
            >
              {/* Star button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(title);
                }}
                className="absolute top-4 right-4 z-20 text-yellow-400"
                title="Toggle Favorite"
              >
                <Star
                  size={24}
                  fill={favorites.includes(title) ? "#FFD700" : "none"}
                  stroke="#FFD700"
                />
              </button>

              <Card
                className={clsx(
                  "relative z-10 bg-transparent border p-6 h-[300px] w-[490px] aspect-[490/300] backdrop-blur",
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
                  <CardContent className="text-left space-y-3">
                    <h3 className="text-[40px] font-medium leading-[132%] tracking-[-0.8px] font-['Space_Grotesk'] text-white">
                      {title}
                    </h3>
                    <p className="text-[20px] font-normal leading-[164%] font-['Space_Grotesk'] text-[#BCBCBC]">
                      {description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            </div>
          )
        )}
      </div>
    </section>
  );
}
