import { useState, useEffect } from "react";
import bannerbg from "../../../../assets/Stars.png";
import cardbg from "../../../../assets/worksmaterbg.png";
import bgBanner from '@/assets/white-mode-stars.png';

const statsData = [
  {
    count: 12000,
    label: "satisfied Student-IA customers",
    type: "count",
    image: cardbg,
  },
  {
    count: 98,
    label: " say they save time",
    type: "percentage",
    image: cardbg,
  },
  {
    count: 25,
    label: " integrated AI tools",
    type: "number",
    image: cardbg,
  },
  {
    count: 92,
    label: "say they understand their courses better",
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
    <>
      <h1 className="dark:text-[#F9F9F9] dark:bg-[#070622] bg-[#F9F9F9] text-[#070622] text-center font-[Space_Grotesk] text-[24px] md:text-[48px] not-italic font-bold leading-[132%] tracking-[-0.48px]">
        Work smarter, not harder with Student-AI!
      </h1>

      <div className="md:py-10 dark:bg-[#070622] bg-[#F9F9F9] text-[#7A43A4] ">
        <div
          style={{
            backgroundImage: `url(${bgBanner})`,
            backgroundSize: 'cover',
          }}
        >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center p-3 ">
            {counts.map((stat, index) => (
              <div
                key={index}
                className="p-5 h-[125px] w-[300px] mx-auto aspect-[300/195] rounded-2xl border-0  "
                style={{
                  // borderRight: "2px dashed #e5e7eb",
                  backgroundImage: `url(${stat.image})`,
                  backgroundSize: 'cover',
                }}
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
                data-aos-duration="800"
              >
                <div>
                  <h1 className="text-center text-[40px] font-bold leading-[124%] tracking-[-1.6px] font-['Space_Grotesk']">
                    {stat.type === 'percentage'
                      ? `${stat.currentCount}%`
                      : stat.type === 'count'
                      ? `${stat.currentCount / 1000}K`
                      : stat.currentCount}
                  </h1>
                  <p className="text-[#BCBCBC] text-center font-[Space_Grotesk] text-[20px] not-italic font-medium leading-[132%] tracking-[-0.48px]">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkSmater;
