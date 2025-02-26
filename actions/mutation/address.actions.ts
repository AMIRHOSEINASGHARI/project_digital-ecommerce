"use server";

// next
import { revalidatePath } from "next/cache";
// types
import { CreateAddress } from "@/types/mutations.types";
// actions
import { checkCustomer } from "../shared.actions";
// models
import { AddressModel, CustomerModel } from "@/models";

const createAddress = async (data: CreateAddress) => {
  try {
    const { error, customer } = await checkCustomer();
    if (error) return { error };

    const currentCustomer = await CustomerModel.findOne({
      email: customer?.email,
    });

    if (data.isDefault) {
      await AddressModel.updateMany(
        { customer: customer?._id },
        { $set: { isDefault: false } }
      );
    }
    const newAddress = await AddressModel.create({
      customer: customer?._id,
      ...data,
    });

    currentCustomer.addresses.push(newAddress._id);
    await currentCustomer.save();

    revalidatePath("/");

    return { message: "Address added" };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { createAddress };
