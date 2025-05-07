import chatIcon from '@/assets/icons/chat-icon.svg';
import chatWithAi from '@/assets/icons/chat-with-ai.svg';
import refreshIcon from '@/assets/icons/refresh-icon.svg';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import sendIcon from '@/assets/icons/send.svg';
import promptLibrary from '@/assets/icons/prompt-library.svg';
import chatgptIcon from '@/assets/icons/chatgpt-icon.svg';
import uploadIcon from '@/assets/icons/upload-icon.svg';
import microPhoneIcon from '@/assets/icons/microphone-icon.svg';

function ChatSystem() {
  const defaultChat = [
    {
      heading: 'Write a python script',
      para: 'to automate sending daily email reports',
    },
    {
      heading: 'Implement a machine learning model',
      para: 'to predict customer behavior based on purchase history',
    },
  ];
  return (
    <div className="w-full relative flex flex-col min-h-[60vh] justify-between ">
      <div className="rounded-[16px] border border-[#D24AC966] p-5 w-max mx-auto absolute top-[20%] left-1/2 transform -translate-x-1/2 mt-4 z-0 opacity-50">
        <img src={chatWithAi} alt="icon" className="w-20 h-20" />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={chatIcon} alt="icon" />
          <p className="text-lg font-medium leading-[164%] capitalize">
            Chat With AI
          </p>
        </div>
        <img src={refreshIcon} alt="" />
      </div>
      <div className="flex flex-col gap-5">
        {defaultChat.map((data, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 py-[32px] px-[22px] rounded-[16px] bg-[linear-gradient(180deg,rgba(122,67,164,0.3)_0%,rgba(96,73,188,0.17)_100%)]"
          >
            <h1 className="text-xl font-medium leading-[132%] tracking-[-0.4px]">
              {data?.heading}
            </h1>
            <p className="text-sm leading-[164%]">{data?.para}</p>
          </div>
        ))}
      </div>
      <div className="rounded-[16px] border border-[#7A43A44D] p-6 flex flex-col gap-6">
        <Input
          placeholder="What do uou want to write?"
          className={`text-lg leading-[164%] text-[#BCBCBC] border-none outline-none focus-visible:ring-0`}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full border border-[#7A43A4]">
              <img src={uploadIcon} alt="icon" />
            </div>
            <div className="p-3 rounded-full border border-[#7A43A4]">
              <img src={microPhoneIcon} alt="icon" />
            </div>
            <div className="flex items-center gap-2 cursor-pointer p-3 rounded-[46px] border border-[#7A43A4]">
              <img src={chatgptIcon} alt="icon" />
              <p className="text-xs leading-[164%]"> GPT 40</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer p-3 rounded-[46px] border border-[#7A43A4]">
              <img src={promptLibrary} alt="icon" />
              <p className="text-xs leading-[164%]"> Prompt Libary</p>
            </div>
          </div>
          <Button className={`flex items-center gap-1 cursor-pointer`}>
            <p>Send</p>
            <img src={sendIcon} alt="icon" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ChatSystem;
