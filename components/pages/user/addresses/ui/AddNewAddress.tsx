"use client";

// react
import { useState } from "react";
// cmp
import { Button } from "@/components/ui/button";
import CustomDialog from "@/components/shared/CustomDialog";
import AddressForm from "../../shared/AddressForm";
import { PlusRegular } from "@/components/svg";

const AddNewAddress = () => {
  const [open, setOpen] = useState(false);

  return (
    <CustomDialog
      open={open}
      setOpen={setOpen}
      asChildTrigger
      dialogTitle="Add new Address to your profile"
      content={<AddressForm type="create" setOpen={setOpen} />}
      trigger={
        <Button variant="outline" className="h-fit">
          <PlusRegular />
          Add new
        </Button>
      }
    />
  );
};

export default AddNewAddress;
