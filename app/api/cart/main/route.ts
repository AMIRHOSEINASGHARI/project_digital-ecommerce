// next
import { NextResponse } from "next/server";
// auth
import { getServerSession } from "next-auth";
// enums
import { ResponseMessages } from "@/enums";
// lib
import authOptions from "@/lib/auth";
import connectDB from "@/lib/connectDB";
// models
import { CartModel, CustomerModel, ProductModel } from "@/models";
// types
import { ICartItem } from "@/types";

export async function GET() {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);
    if (!session)
      return NextResponse.json(
        { message: ResponseMessages.UN_AUTHORIZED },
        { status: 403 }
      );

    const customer = await CustomerModel.findOne({
      email: session?.user?.email,
    });
    if (!customer)
      return NextResponse.json(
        { message: ResponseMessages.USER_NOT_FOUND },
        { status: 404 }
      );

    const cart = await CartModel.findOne({ customer: customer?._id })
      .select("-customer -createdAt -updatedAt")
      .populate({
        path: "items.product",
        model: ProductModel,
        select: "stock price discount images title stock",
      });
    if (!cart)
      return NextResponse.json({ message: "No Cart!" }, { status: 404 });

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

    return NextResponse.json(cart, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `${ResponseMessages.SERVER_ERROR}: ${error}` },
      { status: 500 }
    );
  }
}
