import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import { useNavigate, useLocation } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import { useRef } from "react";
import { tools } from "../aiwritergrid";

export const ToolSlider = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const sliderRef = useRef(null);

  const [sliderInstanceRef, slider] = useKeenSlider({
    slides: { perView: 3, spacing: 15 },
    loop: false,
  });

  const scrollPrev = () => slider.current?.prev();
  const scrollNext = () => slider.current?.next();

  return (
    <div className="relative w-full mb-6">
      {/* Slider Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-700 p-2 rounded-full shadow hover:bg-purple-700"
      >
        <ChevronLeft className="text-white" size={20} />
      </button>

      <div ref={sliderInstanceRef} className="keen-slider px-10">
        {tools.map(({ title, path, Icon }, index) => (
          <div
            key={index}
            onClick={() => navigate(`/ai-assistant/${path}`)}
            className={clsx(
              "keen-slider__slide  flex items-center justify-center px-2 py-2 mx-2 rounded-xl border cursor-pointer transition-all",
              location.pathname.includes(path)
                ? "bg-purple-600 text-white"
                : "bg-[#1e1e2f] text-gray-300 hover:bg-purple-800/40"
            )}
          >
            <div className="flex items-center gap-2">
              <Icon defaultColor="#fff" />
              <span className="text-sm font-medium">{title}</span>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-700 p-2 rounded-full shadow hover:bg-purple-700"
      >
        <ChevronRight className="text-white" size={20} />
      </button>
    </div>
  );
};
