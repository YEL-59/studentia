import { Button } from "@/components/ui/button";
import bannerbg from "../../../../assets/Stars.png";
import AvatarGroup from "../AvatarGroup";
import { VideoThumbnail } from "../VideoThumbnail";
import { TypingEffect } from "../typingeffect";
import dashboardbg from "../../../../assets/DashboardBG.png";

const Banner = () => {
  return (
    <div
      className="p-20 md:p-10 bg-[#070622] text-white h-full"
      style={{
        backgroundImage: `url(${bannerbg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="py-[50px]">
        <div
          className="flex flex-col justify-center items-center gap-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Feature Badge */}
          <div
            className="flex gap-2 justify-center items-center border rounded-[8px] border-[#7A43A4] max-w-[240px] px-3.5 py-1.5"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <div className="h-2 w-2 rounded-full bg-white"></div>
            <h1 className="text-[12px] text-white font-normal leading-[164%]">
              New feature: Grammar Checker
            </h1>
          </div>

          {/* Heading & Subheading */}
          <div data-aos="zoom-in" data-aos-delay="400">
            <h1 className="text-[40px] md:text-[60px] lg:text-[80px] xl:text-[112px] leading-tight font-bold text-center tracking-tight font-['Space_Grotesk']">
              Ultimate AI Creator For
              <span className="h-[100px]">
                {" "}
                <TypingEffect />
              </span>
            </h1>

            <p className="text-primary text-center font-bold text-[20px] leading-[132%] tracking-[-0.2px] font-['Space_Grotesk'] mt-4">
              Our innovative AI enhances your writing and elevates productivity
              while keeping your unique voice intact.
            </p>
          </div>

          {/* Avatars */}
          <div data-aos="fade-up" data-aos-delay="600">
            <AvatarGroup />
          </div>

          {/* Buttons */}
          <div data-aos="fade-up" data-aos-delay="700">
            <div className="flex gap-4">
              <Button className="font-medium capitalize text-[16px] py-5 px-5 rounded-[8px] shadow-md transition duration-300 ease-in-out">
                Start Explore now
              </Button>
              <Button className="bg-[#101531] hover:bg-[#1a1a2e] font-semibold text-[16px] text-[#9d4edd] border border-[#9d4edd] py-5 px-5 rounded-[8px] shadow-md transition duration-300 ease-in-out">
                See feature
              </Button>
            </div>
          </div>

          {/* Video Section */}
          <div data-aos="fade-up" data-aos-delay="900" className="mt-12">
            <VideoThumbnail imageUrl="https://i.ytimg.com/vi/NrB6rAi0KXM/maxresdefault.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
