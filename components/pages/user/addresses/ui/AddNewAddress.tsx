// cmp
import { Button } from "@/components/ui/button";
import CustomDialog from "@/components/shared/CustomDialog";
import AddressForm from "../../shared/AddressForm";
import { PlusRegular } from "@/components/svg";

const AddNewAddress = () => {
  return (
    <CustomDialog
      asChildTrigger
      trigger={
        <Button variant="outline" className="h-fit">
          <PlusRegular />
          Add new
        </Button>
      }
      content={<AddressForm type="create" />}
      dialogTitle="Add new Address to your profile"
    />
  );
};

export default AddNewAddress;
