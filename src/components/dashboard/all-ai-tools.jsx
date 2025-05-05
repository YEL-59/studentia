import React from 'react'
import writingTools from '@/assets/icons/writing-tools.svg';
import articleWriter from '@/assets/icons/article-writer.svg';
import humanizer from '@/assets/icons/humanizer-icon.svg';
import imagesGenerator from '@/assets/icons/image-generator.svg';
import aiAssistant from '@/assets/icons/ai-assistant-icon.svg';
import aiTutor from '@/assets/icons/ai-tutor-icon.svg';
import learnCode from '@/assets/icons/learn-code-icon.svg';
import podcastIa from '@/assets/icons/padcast-ia-icon.svg';
import { NavLink } from 'react-router';

function AllAiTools() {
    const allAiTools = [
      {
        icon: writingTools,
        title: ' Ai Writing Tools',
        text: 'crerate quality conten effortlessly with AI',
      },
      {
        icon: articleWriter,
        title: ' Article writer',
        text: 'Generate Comprehensive articales in minutes',
      },
      {
        icon: humanizer,
        title: ' Humanizer',
        text: ' make content sound more natural and relatable',
        path: '/dashboard/humanizer',
      },
      {
        icon: imagesGenerator,
        title: ' Images Generator',
        text: ' Create  visually  appealling  images with AI',
        path: '/dashboard/image-generator',
      },
      {
        icon: aiAssistant,
        title: '  Ai  Assistant',
        text: ' Get instant  answers and guidence  from Ai',
      },
      {
        icon: aiTutor,
        title: ' Ai  tutor',
        text: ' Learn Interactively with  AI- powered guidance ',
      },
      {
        icon: learnCode,
        title: ' Learn Code',
        text: ' Master Coding  With  AI-  powered  examples and tips ',
      },
      {
        icon: podcastIa,
        title: ' Podcast IA',
        text: ' crerate quality conten effortlessly with AI',
      },
    ];
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 h-full">
      {allAiTools.map((data, index) => (
        <NavLink
          key={index}
          to={data?.path}
          className="flex gap-[18px] items-center rounded-[18px] border border-[#D24AC966] px-6 py-8 bg-transparent"
        >
          <img src={data?.icon} alt="icon" />
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold leading-[132%] tracking-[-0.24px]">
              {data?.title}
            </h1>
            <p className="text-base leading-[164%] text-[#BCBCBC]">
              {data?.text}
            </p>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default AllAiTools;