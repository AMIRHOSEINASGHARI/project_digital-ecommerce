"use server";

// models
import { AddressModel } from "@/models";
// actions
import { checkCustomer } from "../shared.actions";
// types
import { IAddress } from "@/types";

const getMyAddresses = async () => {
  try {
    const { error, customer } = await checkCustomer();
    if (error) throw new Error(error);

    const addresses = await AddressModel.find({ customer: customer?._id })
      .sort({
        isDefault: -1,
      })
      .select("-customer")
      .lean<IAddress[]>();

    return addresses;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getMyAddresses };
