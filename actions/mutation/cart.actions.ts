"use server";

// enums
import { ResponseMessages } from "@/enums";
// models
import { CartModel, ProductModel } from "@/models";
// actions
import { checkCustomer } from "../shared.actions";
// types
import { ICartItem } from "@/types";

const addToCart = async (data: { productId: string }) => {
  try {
    const { customer, error } = await checkCustomer();
    if (error) return { error };

    const { productId } = data;

    const product = await ProductModel.findById(productId);
    if (!product) return { error: ResponseMessages.PRODUCT_NOT_FOUND };

    const cart = await CartModel.findOne({ customer: customer?._id });

    const itemIndex = cart.items.findIndex((item: any) =>
      item.product.equals(productId)
    );

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += 1;
    } else {
      cart.items.push({
        product: productId,
        quantity: 1,
        price: product.price,
        discount: product.discount || 0,
      });
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

    return { message: "Added to cart" };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { addToCart };
