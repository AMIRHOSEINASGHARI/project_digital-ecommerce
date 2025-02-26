"use client";

// react
import { useState } from "react";
// cmp
import CustomDialog from "@/components/shared/CustomDialog";
import AddressForm from "../../shared/AddressForm";
import { Button } from "@/components/ui/button";
import { SolarPenBoldDuotone } from "@/components/svg";

const EditAddress = ({}: { id: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <CustomDialog
      open={open}
      setOpen={setOpen}
      asChildTrigger
      dialogTitle="Edit Address"
      content={<AddressForm type="edit" setOpen={setOpen} />}
      trigger={
        <Button variant="icon" className="text-lg">
          <SolarPenBoldDuotone />
        </Button>
      }
    />
  );
};

export default EditAddress;
