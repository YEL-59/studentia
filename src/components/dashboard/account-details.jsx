import cardBackground from "@/assets/icons/personal-details-card.svg";

const PersonalDetailsCard = () => {
  return (
    <div className="bg-gradient-to-b from-[#7A43A44D] to-[#6049BC2B] rounded-[32px] text-[#FFF] border border-[#313D4F] shadow-md overflow-hidden relative">
      <img src={cardBackground} alt="" className="w-full h-full" />
      <div className="w-full h-full flex flex-col items-center absolute top-0 left-0 ">
        {/* Header */}
        <div className=" p-4 border-b border-[#BCBCBC]">
          <h2 className="text-lg font-semibold text-[#BCBCBC]">
            Personal Details
          </h2>
        </div>

        {/* Content */}
        <div className="p-6 text-[#FFF]">
          <div className="space-y-4">
            {/* Name */}
            <div className="flex items-center">
              <span className="w-32 font-medium">Name</span>
              <span className="">Khadim Diongue</span>
            </div>

            {/* Email */}
            <div className="flex items-center">
              <span className="w-32 font-medium">Email</span>
              <span className="">Khadim@gmail.com</span>
            </div>

            {/* Referral Id */}
            <div className="flex items-center">
              <span className="w-32 font-medium">Referral Id</span>
              <span className="">JHVVBVKVGVBUK</span>
            </div>

            {/* Referral Link */}
            <div className="flex items-center">
              <span className="w-32 font-medium">Referral Link</span>
              <span className="">Link here</span>
            </div>

            {/* Job Role */}
            <div className="flex items-center">
              <span className="w-32 font-medium ">Job Role</span>
              <span className="">Administrator</span>
            </div>

            {/* Company */}
            <div className="flex items-center">
              <span className="w-32 font-medium ">Company</span>
              <span className="">-</span>
            </div>

            {/* Website */}
            <div className="flex items-center">
              <span className="w-32 font-medium ">Website</span>
              <span className="">-</span>
            </div>

            {/* City */}
            <div className="flex items-center">
              <span className="w-32 font-medium ">City</span>
              <span className="">-</span>
            </div>

            {/* Country */}
            <div className="flex items-center">
              <span className="w-32 font-medium">Country</span>
              <span className="">-</span>
            </div>

            {/* Phone */}
            <div className="flex items-center">
              <span className="w-32 font-medium">Phone</span>
              <span className="">-</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsCard;
