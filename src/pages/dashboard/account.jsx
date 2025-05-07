import PersonalDetailsCard from '@/components/dashboard/account-details';
import Accountup from '@/components/dashboard/accountupper';
import EditProfileMenu from '@/components/dashboard/edit-profile';

function Account() {
  return (
    <div className="flex flex-col gap-5 max-h-fit">
      <Accountup />
      <div className="flex gap-8 max-h-[550px] px-6">
        <PersonalDetailsCard />
        <EditProfileMenu />
      </div>
    </div>
  );
}

export default Account;
