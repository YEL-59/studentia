import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import clsx from "clsx";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Cameron Williamson",
    role: "President of Sales",
    text: "This website is incredibly useful for students! It offers a variety of resources that make studying for exams a breeze.",
    avatar: "/avatars/avatar1.png",
  },
  {
    name: "Ronald Richards",
    role: "Web Designer",
    text: "Un site incontournable pour les étudiants, idéal pour réviser efficacement et rédiger des dossiers rapidement ! Je le recommande vivement !",
    avatar: "/avatars/avatar2.png",
  },
  {
    name: "Devon Lane",
    role: "Marketing Coordinator",
    text: "This site is fantastic for learning how to use the humanizer tool; it really eases the worries about AI detectors.",
    avatar: "/avatars/avatar3.png",
  },
  {
    name: "Annette Black",
    role: "Dog Trainer",
    text: "This site is awesome for understanding how to use the humanizer; it really helps us relax about those AI detectors.",
    avatar: "/avatars/avatar4.png",
  },
  {
    name: "Esther Howard",
    role: "Marketing Coordinator",
    text: "I can't recommend this website enough! It has truly surpassed my expectations in every aspect.",
    avatar: "/avatars/avatar5.png",
  },
  {
    name: "Jacob Jones",
    role: "Medical Assistant",
    text: "This platform is super helpful in mastering the humanizer; dealing with AI detectors a lot easier.",
    avatar: "/avatars/avatar6.png",
  },
];

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 4);

  return (
    <div
      className="relative bg-[#070622] text-white py-20 px-4 sm:px-8 overflow-hidden"
      //   style={{
      //     background:
      //       "linear-gradient(183deg, rgba(9,9,11,0) 2.85%, #070622 94.26%, #000 94.26%)",
      //   }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Testimonials</h2>
        <p className="text-sm mt-2 text-gray-300">What Saying Our Customers</p>
      </div>

      <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 p-3 md:p-0">
        {visibleTestimonials.map((item, index) => (
          <Card
            key={index}
            className={clsx(
              "bg-[#11152c]/90 text-white p-4 border border-white/10 transition-all duration-300",
              "hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]"
            )}
          >
            <CardContent className="space-y-3 p-0">
              <div className="flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-400">{item.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-300">{item.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Fade Gradient when not showing all */}
      {!showAll && (
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#070622] via-[#070622]/90 to-transparent z-20 pointer-events-none" />
      )}

      {/* Button */}
      <div className="relative z-30 mt-6 flex justify-center">
        <Button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "Read More"}
        </Button>
      </div>

      {/* Optional glow effect styling */}
      <style jsx>{`
        .glow-button {
          box-shadow: 0 0 15px rgba(124, 58, 237, 0.6);
        }
      `}</style>
    </div>
  );
}
