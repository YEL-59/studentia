import React from 'react'
import { Button } from '@/components/ui/button';

function StartNewChat() {
  return (
    <div className="px-3 py-6 flex flex-col items-center justify-center gap-8 bg-transparent border border-[#7A43A44D] rounded-[16px]">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl font-medium leading-[132%] tracking-[-0.48px]">
          start New chat
        </h1>
        <p className="text-base font-medium leading-[164%] capitalize text-center">
          {' '}
          Information Retrival Has never Been This easy
        </p>
      </div>
      <div className="flex flex-col items-center gap-[13px]">
        <Button
          variant="none"
          className="text-base font-medium leading-[164%] capitalize rounded-[12px] bg-gradient-to-b from-[#7A43A4] to-[#6049BC] text-[#FFF] hover:none px-5 py-3"
        >
          {' '}
          Add New Chat
        </Button>
        <Button
          variant="none"
          className="text-base font-medium leading-[164%] capitalize rounded-[12px] text-gradient-to-b from-[#7A43A4] to-[#6049BC] hover:none px-5 py-3 border border-[#7A43A4)]"
        >
          {' '}
          Add New Chat
        </Button>
      </div>
    </div>
  );
}

export default StartNewChat