import bannerbg from "../../../../assets/Stars.png";
import AvatarGroup from "../AvatarGroup";
import { VideoThumbnail } from "../VideoThumbnail";

const Banner = () => {
  return (
    <div
      className="p-20 md:p-10 bg-[#070622] text-white h-full"
      style={{
        backgroundImage: `url(${bannerbg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="py-[120px]">
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
              <span
                className="block"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #1C6CFF 32.51%, #9345B7 60.01%, #3E0059 82.73%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                AI Web Analyzer
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
              <button className="bg-[#7b2cbf] hover:bg-[#9d4edd] text-white font-medium capitalize text-[16px] py-3 px-5 rounded-[12px] shadow-md transition duration-300 ease-in-out">
                Start Explore now
              </button>
              <button className="bg-[#101531] hover:bg-[#1a1a2e] font-semibold text-[16px] text-[#9d4edd] border border-[#9d4edd] py-3 px-5 rounded-[8px] shadow-md transition duration-300 ease-in-out">
                See feature
              </button>
            </div>
          </div>

          {/* Video Section */}
          <div data-aos="fade-up" data-aos-delay="900">
            <VideoThumbnail imageUrl="https://i.ytimg.com/vi/NrB6rAi0KXM/maxresdefault.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
