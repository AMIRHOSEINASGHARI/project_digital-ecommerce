import { ResponseMessages } from "@/enums";
import authOptions from "@/lib/auth";
import connectDB from "@/lib/connectDB";
import { CartModel, CustomerModel, ProductModel } from "@/models";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

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
      .select("-customer -createdAt -updatedAt -_id -__v")
      .populate({
        path: "items.product",
        model: ProductModel,
        select: "_id",
      });
    if (!cart)
      return NextResponse.json({ message: "No Cart!" }, { status: 404 });

    return NextResponse.json(cart, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `${ResponseMessages.SERVER_ERROR}: ${error}` },
      { status: 500 }
    );
  }
}
