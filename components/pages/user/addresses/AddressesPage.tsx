// cmp
import PageHeading from "@/components/shared/PageHeading";
import AddressForm from "../shared/AddressForm";
import { SolarGolfBoldDuotone } from "@/components/svg";

const AddressesPage = () => {
  return (
    <main>
      <PageHeading title="My Addresses" icon={<SolarGolfBoldDuotone />} />
      <AddressForm type="create" />
    </main>
  );
};

export default AddressesPage;
