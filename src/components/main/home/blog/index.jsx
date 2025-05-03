"use client";

import { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const blogData = [
  {
    title: "How Our AI Startup is Transforming Industries",
    category: "Technology",
    date: "Jul 21",
    image: "/blog1.png",
    excerpt:
      "In an age where innovation reigns supreme, artificial intelligence (AI) has emerged...",
  },
  {
    title: "Notre vision",
    category: "Technology",
    date: "Jul 21",
    image: "/blog2.png",
    excerpt:
      "In an age where innovation reigns supreme, artificial intelligence (AI) has emerged...",
  },
  {
    title: "STUDENT-IA",
    category: "Technology",
    date: "Jul 21",
    image: "/blog3.png",
    excerpt:
      "In an age where innovation reigns supreme, artificial intelligence (AI) has emerged...",
  },
  {
    title: "AI-Powered Solutions for Modern Challenges",
    category: "Technology",
    date: "Jul 21",
    image: "/blog4.png",
    excerpt:
      "In an age where innovation reigns supreme, artificial intelligence (AI) has emerged...",
  },
  {
    title: "The Future of AI in Everyday Life",
    category: "Technology",
    date: "Jul 21",
    image: "/blog5.png",
    excerpt:
      "In an age where innovation reigns supreme, artificial intelligence (AI) has emerged...",
  },
];

export default function BlogCarousel() {
  const containerRef = useRef < HTMLDivElement > null;
  const [current, setCurrent] = useState(0);

  const scrollTo = (idx: number) => {
    const container = containerRef.current;
    if (!container) return;
    const cardWidth = container.offsetWidth;
    container.scrollTo({ left: idx * cardWidth, behavior: "smooth" });
    setCurrent(idx);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / el.offsetWidth);
      setCurrent(idx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative w-full py-16 bg-[#0b0c2a] text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Our latest blogs</h2>
        <p className="text-sm text-gray-400 mt-1">Stay updated</p>
      </div>

      {/* Carousel */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 px-6 scrollbar-none"
      >
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[30%] snap-center"
          >
            <Card className="bg-[#1b1e3c] rounded-2xl overflow-hidden shadow-md transition hover:shadow-xl h-full">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[180px] object-cover"
              />
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3 text-sm">
                  <Badge
                    variant="outline"
                    className="border-gray-500 text-white px-2 py-1"
                  >
                    {blog.category}
                  </Badge>
                  <span className="text-gray-400">{blog.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 leading-snug">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-400">{blog.excerpt}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <Button
        size="icon"
        variant="ghost"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[#1b1e3c]/50 hover:bg-[#1b1e3c]/80"
        onClick={() => scrollTo(Math.max(current - 1, 0))}
        disabled={current === 0}
      >
        <ChevronLeft className="text-white" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[#1b1e3c]/50 hover:bg-[#1b1e3c]/80"
        onClick={() => scrollTo(Math.min(current + 1, blogData.length - 1))}
        disabled={current === blogData.length - 1}
      >
        <ChevronRight className="text-white" />
      </Button>

      {/* Pagination */}
      <div className="mt-8 flex justify-center space-x-2">
        {blogData.map((_, idx) => (
          <span
            key={idx}
            onClick={() => scrollTo(idx)}
            className={`h-2 w-2 rounded-full cursor-pointer transition ${
              idx === current ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
