// actions
import { getMyAddresses } from "@/actions/query/address.actions";
// cmp
import PageHeading from "@/components/shared/PageHeading";
import { SolarGolfBoldDuotone } from "@/components/svg";
import AddressesList from "./ui/AddressesList";

const AddressesPage = async () => {
  const addresses = await getMyAddresses();

  return (
    <main>
      <PageHeading title="My Addresses" icon={<SolarGolfBoldDuotone />} />
      <AddressesList addresses={addresses} />
    </main>
  );
};

export default AddressesPage;
