import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import { useNavigate, useLocation } from "react-router";
import clsx from "clsx";
import { tools } from "../aiwritergrid";

export const ToolSlider = () => {
  const [sliderRef] = useKeenSlider({ slides: { perView: 3, spacing: 10 } });
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="keen-slider mb-6 px-4" ref={sliderRef}>
      {tools.map(({ title, path, Icon }, index) => (
        <div
          key={index}
          onClick={() => navigate(`/ai-assistant/${path}`)}
          className={clsx(
            "keen-slider__slide cursor-pointer flex items-center justify-center px-4 py-2 rounded-lg border",
            location.pathname.includes(path)
              ? "bg-purple-600 text-white"
              : "bg-gray-800 text-gray-300"
          )}
        >
          <div className="flex items-center gap-2">
            <Icon defaultColor="#fff" />
            <span>{title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
