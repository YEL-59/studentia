import PersonalDetailsCard from "@/components/dashboard/account-details";
import Accountup from "@/components/dashboard/accountupper";
import EditProfileMenu from "@/components/dashboard/edit-profile";

import GeneratedChart from "./GeneratedChart";

function Account() {
  return (
    <div className="flex flex-col gap-5 max-h-fit">
      <Accountup />
      <div className="flex gap-8 max-h-[550px] w-full px-6">
        <div className="w-full flex flex-col gap-5">
          <PersonalDetailsCard />
        </div>
        <div className="w-full flex flex-col gap-5">
          <EditProfileMenu />
        </div>
        <div className="w-full ">
          <GeneratedChart />
        </div>
      </div>
    </div>
  );
}

export default Account;
