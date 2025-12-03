"use client";

// react query
import { useQuery } from "@tanstack/react-query";
// services
import { fetchUserAddress } from "@/services/queries";
// types
import { IAddress } from "@/types";
// react
import { useEffect, useState } from "react";
// cmp
import CustomDialog from "@/components/shared/CustomDialog";
import AddressForm from "../../shared/AddressForm";
import { Button } from "@/components/ui/button";
import { SolarPenBoldDuotone } from "@/components/svg";
import Loader from "@/components/shared/Loader";

const EditAddress = ({ id }: { id: string }) => {
  const [open, setOpen] = useState(false);
  const {
    data: address,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["address", id],
    queryFn: () => fetchUserAddress(id),
    staleTime: 0,
    cacheTime: 0,
    enabled: open,
  });

  useEffect(() => {
    if (open) {
      refetch();
    }
  }, [open, refetch]);

  return (
    <CustomDialog
      open={open}
      setOpen={setOpen}
      asChildTrigger
      dialogTitle="Edit Address"
      content={
        isLoading ? (
          <div className="w-full h-[50vh] flex items-center justify-center">
            <Loader />
          </div>
        ) : (
          <AddressForm
            type="edit"
            address={address as IAddress}
            setOpen={setOpen}
          />
        )
      }
      trigger={
        <Button variant="icon" className="text-lg">
          <SolarPenBoldDuotone />
        </Button>
      }
    />
  );
};

export default EditAddress;
