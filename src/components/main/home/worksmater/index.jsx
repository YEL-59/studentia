import { useState, useEffect } from "react";
import bannerbg from "../../../../assets/Stars.png";
import cardbg from "../../../../assets/worksmaterbg.png";

const statsData = [
  {
    count: 12000,
    label: "satisfied Student-IA customers",
    type: "count",
    image: cardbg,
  },
  {
    count: 98,
    label: "satisfaction rate",
    type: "percentage",
    image: cardbg,
  },
  {
    count: 25,
    label: "tools integrated",
    type: "number",
    image: cardbg,
  },
  {
    count: 92,
    label: "time saved",
    type: "percentage",
    image: cardbg,
  },
];

const WorkSmater = () => {
  // State to manage counters
  const [counts, setCounts] = useState(
    statsData.map((item) => ({ ...item, currentCount: 0 }))
  );

  useEffect(() => {
    const timers = counts.map((item, index) => {
      if (item.type === "percentage") {
        // For percentage, increment until target
        return setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            if (newCounts[index].currentCount < item.count) {
              newCounts[index].currentCount += 1; // Increment by 1 for smooth transition
            } else {
              clearInterval(timers[index]); // Stop interval when it reaches the target
            }
            return newCounts;
          });
        }, 30); // Faster interval for percentage
      } else {
        // For count (and number), increment until target
        return setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            if (newCounts[index].currentCount < item.count) {
              newCounts[index].currentCount += 100; // Increment in steps of 100 for large numbers
            } else {
              clearInterval(timers[index]); // Stop interval when it reaches the target
            }
            return newCounts;
          });
        }, 30); // Faster interval for counts
      }
    });

    return () => timers.forEach((timer) => clearInterval(timer)); // Cleanup on unmount
  }, []);

  return (
    <div
      className="py-30 bg-[#070622] text-white h-full"
      style={{
        backgroundImage: `url(${bannerbg})`,
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-[#F9F9F9] text-center font-[Space_Grotesk] text-[48px] not-italic font-bold leading-[132%] tracking-[-0.48px] mb-15">
        Work smarter, not harder with Student-AI!
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {counts.map((stat, index) => (
          <div
            key={index}
            className="p-5 h-[195px] w-[381px] aspect-[381/195]"
            style={{
              backgroundImage: `url(${stat.image})`,
              backgroundSize: "cover",
            }}
            data-aos="fade-up"
            data-aos-delay={200 + index * 100}
            data-aos-duration="800"
          >
            <div>
              <h1 className="text-center text-[80px] font-bold leading-[124%] tracking-[-1.6px] font-['Space_Grotesk']">
                {stat.type === "percentage"
                  ? `${stat.currentCount}%`
                  : stat.type === "count"
                  ? `${stat.currentCount / 1000}K`
                  : stat.currentCount}
              </h1>
              <p className="text-[#BCBCBC] text-center font-[Space_Grotesk] text-[24px] not-italic font-medium leading-[132%] tracking-[-0.48px]">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSmater;
