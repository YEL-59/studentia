import logo from '@/assets/dashboard-logo.png';
import createCoversationIcon from '@/assets/icons/create-conversation.svg';
import searchIcon from '@/assets/icons/search-icon.svg';
import StartNewChat from '@/components/ai-assistant/shared/start-new-chat';

function Sidebar() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1C202B] text-[#FFF]">
      <div className="h-[80px] p-[10px] bg-[#1C202B] bg-gradient-to-t from-[rgba(96,73,188,0.17)] to-[rgba(122,67,164,0.3)]">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-col justify-between h-[calc(100svh-80px)] font-['Space_Grotesk'] px-8 ">
        <div>
          <div className="flex items-center gap-3 rounded-[20px] border border-[#CFCFCF1C] px-4 py-3 bg-gradient-to-b from-[#7a43a34d] to-[#6049bc2b] my-6">
            <img src={searchIcon} alt="icon" />
            <p className="text-[#FFF] text-sm text-opacity-80">Search</p>
          </div>
          <div className="flex flex-col gap-[14px]">
            <div className="flex items-center gap-3 justify-between px-6 py-3 border border-[#RRGGBBAA] rounded-[16px] cursor-pointer">
              <p className="text-lg font-medium leading-[132%] trakcing-[-0.4px] text-[#BCBCBC]">
                {' '}
                New Conversation
              </p>
              <img src={createCoversationIcon} alt="icon" className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-3 justify-between px-6 py-3 border border-[#RRGGBBAA] rounded-[16px] cursor-pointer">
              <p className="text-lg font-medium leading-[132%] trakcing-[-0.4px] text-[#BCBCBC]">
                {' '}
                New Conversation
              </p>
              <img src={createCoversationIcon} alt="icon" className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-3 justify-between px-6 py-3 border border-[#RRGGBBAA] rounded-[16px] cursor-pointer">
              <p className="text-lg font-medium leading-[132%] trakcing-[-0.4px] text-[#BCBCBC]">
                {' '}
                New Conversation
              </p>
              <img src={createCoversationIcon} alt="icon" className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-3 justify-between px-6 py-3 border border-[#RRGGBBAA] rounded-[16px] cursor-pointer">
              <p className="text-lg font-medium leading-[132%] trakcing-[-0.4px] text-[#BCBCBC]">
                {' '}
                New Conversation
              </p>
              <img src={createCoversationIcon} alt="icon" className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-3 justify-between px-6 py-3 border border-[#RRGGBBAA] rounded-[16px] cursor-pointer">
              <p className="text-lg font-medium leading-[132%] trakcing-[-0.4px] text-[#BCBCBC]">
                {' '}
                New Conversation
              </p>
              <img src={createCoversationIcon} alt="icon" className="w-6 h-6" />
            </div>
          </div>
        </div>
        <StartNewChat/>
      </div>
    </div>
  );
}

export default Sidebar;
