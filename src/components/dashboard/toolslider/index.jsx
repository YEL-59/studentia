import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useNavigate, useLocation } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import { tools } from "../aiwritergrid";

export const ToolSlider = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const sliderRef = useRef(null);

  const [sliderInstanceRef, slider] = useKeenSlider({
    slides: { perView: 4, spacing: 10 },
    loop: false,
  });

  // Auto scroll to active tool when route changes
  useEffect(() => {
    const activeIndex = tools.findIndex((tool) =>
      location.pathname.includes(tool.path)
    );

    if (slider.current && activeIndex !== -1) {
      slider.current.moveToIdx(activeIndex);
    }
  }, [location.pathname, slider]);

  const scrollPrev = () => slider.current?.prev();
  const scrollNext = () => slider.current?.next();

  return (
    <div className="relative w-full mb-6">
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-700 p-2 rounded-full shadow hover:bg-purple-700"
      >
        <ChevronLeft className="text-white" size={20} />
      </button>

      <div ref={sliderInstanceRef} className="keen-slider">
        {tools.map(({ title, path, Icon }, index) => (
          <div
            key={index}
            onClick={() => navigate(`/ai-assistant/${path}`)}
            className={clsx(
              "keen-slider__slide flex items-center justify-center py-2 mx-2 rounded-xl border cursor-pointer transition-all",
              location.pathname.includes(path)
                ? "bg-gradient-to-b from-[#7A43A4] to-[#6049BC] text-white"
                : "bg-[#1e1e2f] text-gray-300 hover:bg-[#7A43A4]"
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
