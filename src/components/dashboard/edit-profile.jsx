import documentIcon from '@/assets/icons/document-white-icon.svg';
import cardBackground from '@/assets/icons/edit-profile.svg';
import { Checkbox } from '../ui/checkbox';

const EditProfileMenu = () => {
  return (
    <div className="bg-gradient-to-b from-[#7A43A44D] to-[#6049BC2B] rounded-[42px] text-[#FFF] border border-[#313D4F] shadow-md  relative h-[450px]">
      <img src={cardBackground} alt="" className="w-full h-full " />
      <div className="flex flex-col items-center justify-center w-full h-full absolute top-0 left-0">
        {/* Header */}
        <div className=" p-4 border-b border-[#BCBCBC] w-full text-center mb-4">
          <h2 className="text-base font-medium leading-[164%] capitalize text-[#BCBCBC]">
            Edit Profile
          </h2>
        </div>
        {/* Menu Items */}
        <div className="flex flex-col gap-2 h-full">
          <div className="p-4 flex items-center gap-3 cursor-pointer rounded-[6px] border border-[rgba(210,74,201,0.40)]">
            <img src={documentIcon} alt="icon" />
            <span className="text-lg leading-[164%]">Update Profile</span>
          </div>
          <div className="p-4 flex items-center gap-3 cursor-pointer rounded-[6px] border border-[rgba(210,74,201,0.40)]">
            <img src={documentIcon} alt="icon" />
            <span className="text-lg leading-[164%]">Change Password</span>
          </div>
          <div className="p-4 flex items-center gap-3 cursor-pointer rounded-[6px] border border-[rgba(210,74,201,0.40)]">
            <img src={documentIcon} alt="icon" />
            <span className="text-lg leading-[164%]">2FA Authentication</span>
          </div>
          <div className="p-4 flex items-center gap-3 cursor-pointer rounded-[6px] border border-[rgba(210,74,201,0.40)]">
            <img src={documentIcon} alt="icon" />
            <span>Delete Account</span>
          </div>
          <div className="p-4 flex items-center gap-3 justify-between cursor-pointer">
            <Checkbox />
            <span className="text-sm leading-[164%]">
              Receive Newsletters via email
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileMenu;
