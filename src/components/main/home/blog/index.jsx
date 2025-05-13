import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Card, CardContent } from "@/components/ui/card";
import img1 from "../../../../assets/blog1.png";
import img2 from "../../../../assets/blog2.png";
import img3 from "../../../../assets/blog3.png";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const blogs = [
  {
    title: "How Our AI Startup is Transforming Industries",
    date: "Jul 21",
    tag: "Technology",
    image: img1,
    desc: "In an age where innovation reigns supreme, AI has emerged as the trailblazer...",
  },
  {
    title: "Notre vision",
    date: "Jul 21",
    tag: "Technology",
    image: img2,
    desc: "In an age where innovation reigns supreme, AI has emerged as the trailblazer...",
  },
  {
    title: "Student-IA",
    date: "Jul 21",
    tag: "Technology",
    image: img3,
    desc: "In an age where innovation reigns supreme, AI has emerged as the trailblazer...",
  },
  {
    title: "Notre vision",
    date: "Jul 21",
    tag: "Technology",
    image: img2,
    desc: "In an age where innovation reigns supreme, AI has emerged as the trailblazer...",
  },
  {
    title: "Student-IA",
    date: "Jul 21",
    tag: "Technology",
    image: img3,
    desc: "In an age where innovation reigns supreme, AI has emerged as the trailblazer...",
  },
  {
    title: "Student-IA",
    date: "Jul 21",
    tag: "Technology",
    image: img3,
    desc: "In an age where innovation reigns supreme, AI has emerged as the trailblazer...",
  },
];

export default function BlogCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const [sliderInstanceRef, slider] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(max-width: 640px)": {
        slides: {
          perView: 1,
          spacing: 12,
        },
      },
      "(min-width: 641px) and (max-width: 1023px)": {
        slides: {
          perView: 2,
          spacing: 16,
        },
      },
    },
    slides: {
      perView: 3,
      spacing: 24,
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    created(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  // Auto Slide
  useEffect(() => {
    let interval;
    if (slider.current) {
      interval = setInterval(() => {
        slider.current?.next();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <section className="py-16 dark:bg-[#0F0C29] bg-[#fff] text-white text-center p-3">
      <h2
        className="text-white text-center font-['Space_Grotesk'] text-3xl md:text-[48px] font-bold leading-[132%] tracking-[-0.48px]"
        data-aos="fade-up"
      >
        Our latest blogs
      </h2>
      <p
        className="text-white font-['Space_Grotesk'] text-[18px] font-normal leading-[164%]"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Stay updated
      </p>

      <div
        //ref={sliderRef}
        className="keen-slider mt-10  container mx-auto"
        ref={sliderInstanceRef}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="keen-slider__slide bg-[#1A1730] text-left rounded-xl overflow-hidden "
          >
            <Card
              className="shadow-none p-5 border-2 border-transparent rounded-xl
             hover:border-[#7A43A4] transition-all duration-300
             dark:bg-gradient-to-br dark:from-[#221C4A] dark:via-[#30255A] dark:to-[#3B2B6C]"
              style={{
                backgroundColor: "#EDF0FA",
              }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-[10px]"
                style={{
                  boxShadow: `
      0px 1px 3px 0px rgba(50, 50, 50, 0.20),
      0px 2px 1px -1px rgba(50, 50, 50, 0.12),
      0px 1px 1px 0px rgba(50, 50, 50, 0.14)
    `,
                }}
              />

              <CardContent className="p-0">
                <div className="flex items-center space-x-2 text-xs text-black dark:text-[#9CA3AF] mb-2 px-2 py-1 rounded w-[fit-content]">
                  <span
                    className="px-2 py-1 rounded"
                    style={{
                      borderRadius: "8px",
                      background:
                        "linear-gradient(0deg, rgba(180, 180, 180, 0.12) 0%, rgba(180, 180, 180, 0.12) 100%)",
                    }}
                  >
                    {blog.tag}
                  </span>
                  <span className="rounded-full bg-white h-2 w-2"></span>
                  <span>{blog.date}</span>
                </div>

                <h3 className="overflow-hidden text-black dark:text-white text-ellipsis whitespace-nowrap font-sans text-[24px] font-semibold leading-[110%] mb-1">
                  {blog.title}
                </h3>
                <p className="overflow-hidden text-black dark:text-[#BCBCBC] text-ellipsis whitespace-nowrap font-sans text-base font-normal leading-[160%] ">
                  {blog.desc}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="mt-6 flex justify-center space-x-2">
        {blogs.map((_, i) => (
          <button
            key={i}
            onClick={() => slider.current?.moveToIdx(i)}
            className={`w-3 h-3 rounded-full transition-all duration-200 border-2 ${
              currentSlide === i
                ? "bg-primary border-primary"
                : "bg-[#6B7280] border-transparent hover:border-purple-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
