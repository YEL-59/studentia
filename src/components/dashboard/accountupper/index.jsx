// components/DashboardSummary.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import accbg from "../../../assets/accountbg.png";
import Document from "@/assets/svg/document";
import Word from "@/assets/svg/word";
import Img from "@/assets/svg/img";
import Code from "@/assets/svg/code";
import Human from "@/assets/svg/human";
import cardBackground from '@/assets/icons/horizontal-card-background.svg';
import profile from '@/assets/profile.png';

const Accountup = () => {
  return (
    <div className="text-white p-6  space-y-6 ">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Good Morning, Khadim</h1>
        <p className="text-sm text-gray-400">Today Apr 28, 2025 | 7:29 PM</p>
      </div>

      {/* Profile + Progress Section */}
      <div
        className="rounded-2xl p-6 flex flex-col  flex-wrap gap-6 shadow-lg"
        style={{
          borderRadius: '32px',
          border: '1px solid rgba(210, 74, 201, 0.4)',
          background:
            'linear-gradient(180deg, rgba(122, 67, 164, 0.30) 0%, rgba(96, 73, 188, 0.17) 100%)',
        }}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Profile */}
          <div className="w-1/2 flex items-center gap-4">
            <img
              src={profile}
              alt="Profile"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="flex-1">
              <p className="text-sm text-center text-gray-300">Join Apr 2024</p>
              <Progress
                value={(3400 / 7000) * 100}
                className="w-[80%] shrink-0 mt-1"
              />
              <div className="w-[80%] shrink-0 flex items-center justify-between">
                <p className="text-sm leading-[164%]">3.4K Words Available</p>
                <p className="text-sm leading-[164%]">7k</p>
              </div>
            </div>
          </div>

          {/* Image Usage */}
          <div className="w-1/2">
            <Progress
              value={(918 / 7000) * 100}
              className="w-[80%] shrink-0 mt-1"
            />
            <div className="w-[80%] shrink-0 flex items-center justify-between">
              <p className="text-sm leading-[164%]">918 Images Left</p>
              <p className="text-sm leading-[164%]">7k</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
          {[
            { title: 'Documents Created', svg: <Document />, value: 90 },
            { title: 'Words Generated', svg: <Word />, value: '53,553' },
            { title: 'Image Created', svg: <Img />, value: 224 },
            { title: 'Codes Generated', svg: <Code />, value: 65 },
            { title: 'Humanize Generated', svg: <Human />, value: '13,735' },
          ].map((item, idx) => (
            <Card
              key={idx}
              className="relative overflow-hidden shadow-lg bg-gradient-to-b from-[#7A43A44D] to-[#6049BC2B] rounded-[32px] text-[#FFF] border border-[#313D4F] py-0"
              //   style={{
              //     borderRadius: '32px',
              //     border: '1px solid rgba(210, 74, 201, 0.4)',
              //     backgroundImage: `url(${accbg})`,
              //     backgroundSize: 'cover',
              //     backgroundRepeat: 'no-repeat',
              //     backgroundPosition: 'center, center',
              //   }}
            >
              <img src={cardBackground} alt="" className="w-full h-full" />
              <CardContent className="absolute text-center py-6">
                <p className="text-[#F9F9F9] font-medium font-['Space_Grotesk'] text-base leading-[164%] capitalize flex justify-center items-center gap-2 mb-2">
                  {' '}
                  {item.svg} {item.title}
                </p>
                <p className="text-2xl font-bold">{item.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accountup;
