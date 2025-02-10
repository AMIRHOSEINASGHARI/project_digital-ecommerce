"use server";

// models
import { CartModel } from "@/models";
// actions
import { checkCustomer } from "../shared.actions";
// types
import { ICart } from "@/types";

const getCustomerCart = async () => {
  try {
    const { error, customer } = await checkCustomer();
    if (error) throw new Error(error);

    const cart = await CartModel.findOne({ customer: customer?._id })
      .select("-customer")
      .lean<ICart>();
    if (!cart) throw new Error("No cart!");

    return cart;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export { getCustomerCart };
