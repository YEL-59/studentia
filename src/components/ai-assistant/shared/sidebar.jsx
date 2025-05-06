import logo from '@/assets/dashboard-logo.png';
import menuIcon from '@/assets/icons/menu-icon.svg';
import StartNewChat from './start-new-chat';

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
        <StartNewChat/>
      </div>
    </div>
  );
}

export default Sidebar;
