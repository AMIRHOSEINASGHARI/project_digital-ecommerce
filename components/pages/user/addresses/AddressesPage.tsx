// actions
import { getMyAddresses } from "@/actions/query/address.actions";
// cmp
import PageHeading from "@/components/shared/PageHeading";
import { SolarGolfBoldDuotone } from "@/components/svg";
import AddressesList from "./ui/AddressesList";
import AddNewAddress from "./ui/AddNewAddress";

const AddressesPage = async () => {
  const addresses = await getMyAddresses();

  return (
    <main>
      <div className="flex justify-between flex-wrap xl:mb-8 mb-3">
        <PageHeading
          className="m-0"
          title="My Addresses"
          icon={<SolarGolfBoldDuotone />}
        />
        <AddNewAddress />
      </div>
      <AddressesList addresses={addresses} />
    </main>
  );
};

export default AddressesPage;
