import Marquee from "react-fast-marquee";
import logo1 from "../../../../assets/Logo1.png";
import logo2 from "../../../../assets/Logo1.png";
import logo3 from "../../../../assets/Logo1.png";
import logo4 from "../../../../assets/Logo1.png";
import logo5 from "../../../../assets/Logo1.png";
import logo6 from "../../../../assets/Logo1.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo3, logo4];

const LogoMarquee = () => {
  return (
    <div className="max-w-[800px] mx-auto bg-[#070622] ">
      <Marquee
        speed={40}
        gradient={false}
        pauseOnClick={true}
        direction="left"
        loop={0}
        delay={0}
        play={true}
        pauseOnHover={true}
        className="flex items-center"
      >
        {logos.map((src, index) => (
          <div
            key={index}
            className="flex w-[205.429px] h-[85.595px] flex-col justify-center items-center gap-[8.56px] shrink-0 px-4"
          >
            <img
              src={src}
              alt={`Logo ${index + 1}`}
              className="max-h-full max-w-full object-contain filter grayscale brightness-[0.5] hover:filter-none transition-all duration-300"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoMarquee;
