"use server";

// next
import { notFound } from "next/navigation";
// models
import { CommentModel, ProductModel } from "@/models";
// types
import { IComment } from "@/types";

const getProductComments = async (id: string) => {
  try {
    const product = await ProductModel.findOne({
      _id: id,
      published: true,
    });

    if (!product) notFound();

    const productComments = await CommentModel.find({
      productId: id,
      published: true,
    })
      .select("-productId")
      .lean<IComment[]>();

    return productComments;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export { getProductComments };
