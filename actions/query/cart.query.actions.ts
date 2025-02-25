"use server";

// models
import { CartModel, ProductModel } from "@/models";
// actions
import { checkCustomer } from "../shared.actions";
// types
import { ICart, ICartItem } from "@/types";

const getCustomerCart = async (): Promise<ICart> => {
  try {
    const { error, customer } = await checkCustomer();
    if (error) throw new Error(error);

    const cart = await CartModel.findOne({ customer: customer?._id })
      .select("-customer -createdAt -updatedAt")
      .populate({
        path: "items.product",
        model: ProductModel,
        select: "title images stock price discount brand category",
      });
    if (!cart) throw new Error("No cart!");

    for (let i = 0; i < cart.items.length; i++) {
      const item = cart.items[i];
      const product = item.product;

      if (product.stock < item.quantity) {
        cart.items.splice(i, 1);
        i--;
      }
    }

    cart.totalPrice = cart.items.reduce(
      (sum: number, item: ICartItem) => sum + item.price * item.quantity,
      0
    );
    cart.totalDiscount = cart.items.reduce(
      (sum: number, item: ICartItem) =>
        sum + (item.discount / 100) * item.price * item.quantity,
      0
    );
    cart.totalPayable = cart.totalPrice - cart.totalDiscount;
    cart.totalItems = cart.items.reduce(
      (sum: number, item: ICartItem) => sum + item.quantity,
      0
    );

    await cart.save();

    return cart;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export { getCustomerCart };
