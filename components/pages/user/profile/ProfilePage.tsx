// cmp
import PageHeading from "@/components/shared/PageHeading";
import { SolarUserRoundedBoldDuotone } from "@/components/svg";

const ProfilePage = () => {
  return (
    <main>
      <PageHeading title="My Profile" icon={<SolarUserRoundedBoldDuotone />} />
    </main>
  );
};

export default ProfilePage;
