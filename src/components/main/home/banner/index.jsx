import { Button } from "@/components/ui/button";
import bannerbg from "../../../../assets/Stars.png";
import AvatarGroup from "../AvatarGroup";
import { VideoThumbnail } from "../VideoThumbnail";
import { TypingEffect } from "../typingeffect";
import dashboardbg from "../../../../assets/bashboardbg.png";
import video from "../../../../assets/dashboard.mp4";

const Banner = () => {
  return (
    <div
      className="p-5 md:p-10 bg-[#070622] text-white h-full"
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
            <h1 className="text-[12px] text-white font-normal leading-[164%] font-['Space_Grotesk']">
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

            <p className="text-[#F9F9F9] text-center font-bold text-[20px] leading-[132%] tracking-[-0.2px] font-['Space_Grotesk'] mt-4">
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
          <div
            className="relative flex items-center justify-center mt-12"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            {/* Left glow */}
            <div
              className="absolute left-[-100px] top-1/2 -translate-y-1/2 w-[300px] h-[200px] rounded-full z-0 blur-[160px]"
              style={{
                background:
                  "radial-gradient(59.43% 50% at 50% 50%, #C7EDFD 0%, #82C8E5 49.48%)",
              }}
            />

            {/* Right glow */}
            <div
              className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[300px] h-[200px] rounded-full z-0 blur-[160px]"
              style={{
                background:
                  "radial-gradient(59.43% 50% at 50% 50%, #C7EDFD 0%, #82C8E5 49.48%)",
              }}
            />

            {/* VideoThumbnail in center */}
            <div className="relative z-10 w-full  max-w-4xl">
              <VideoThumbnail videoUrl={video} imageUrl={dashboardbg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
