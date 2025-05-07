import React from 'react'
import chatWithAi from '@/assets/icons/chat-with-ai.svg';


function Chat({handleOpenChat}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div onClick={handleOpenChat} className="rounded-[16px] border border-[#D24AC966] px-[54px] py-[32px]">
        <img src={chatWithAi} alt="" />
      </div>

      <p className="text-[40px] font-medium leading-[132%] tracking-[-0.8px] text-[#F9F9F9]">
        Chat With AI
      </p>
    </div>
  );
}

export default Chat;