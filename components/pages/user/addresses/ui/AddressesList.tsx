// types
import { IAddress } from "@/types";
// cmp
import NoData from "@/components/shared/NoData";
import { Card } from "@/components/ui/card";

const AddressesList = ({ addresses }: { addresses: IAddress[] }) => {
  if (!addresses?.length)
    return (
      <Card>
        <NoData
          title="No addresses found!"
          subText="It looks like you have not add any addresses yet"
        />
      </Card>
    );

  return <div>AddressesList</div>;
};

export default AddressesList;
