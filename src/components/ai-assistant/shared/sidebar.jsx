import logo from '@/assets/dashboard-logo.png';
import menuIcon from '@/assets/icons/menu-icon.svg';
import { Button } from '@/components/ui/button';

function Sidebar() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1C202B] text-[#FFF]">
      <div className="h-[80px] p-[10px] bg-[#1C202B] bg-gradient-to-t from-[rgba(96,73,188,0.17)] to-[rgba(122,67,164,0.3)]">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-col justify-between h-[calc(100svh-80px)] font-['Space_Grotesk'] px-8">
        <div className="flex flex-col gap-[18px]">
          <h1 className="text-2xl font-bold leading-[132%] tracking-[-0.24px] px-5 py-3">
            Your Work Space
          </h1>
          <div className="border border-[#F9F9F9] rounded-[12px] px-5 py-3 flex items-center justify-between">
            <p>Design Tools</p>
            <img src={menuIcon} alt="icon" />
          </div>
          <div className="border border-[#F9F9F9] rounded-[12px] px-5 py-3 flex items-center justify-between">
            <p>Collaborative Features</p>
          </div>
          <div className="border border-[#F9F9F9] rounded-[12px] px-5 py-3 flex items-center justify-between">
            <p>Plugin Library</p>
            <img src={menuIcon} alt="icon" />
          </div>
          <div className="border border-[#F9F9F9] rounded-[12px] px-5 py-3 flex items-center justify-between">
            <p>Prototyping Options</p>
          </div>
          <div className="border border-[#F9F9F9] rounded-[12px] px-5 py-3 flex items-center justify-between">
            <p>Feedback Mechanisms</p>
          </div>
        </div>
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
      </div>
    </div>
  );
}

export default Sidebar;
