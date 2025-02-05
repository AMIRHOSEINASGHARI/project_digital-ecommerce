// mongoose
import { Document } from "mongoose";
// types
import { ICustomer, IProduct, IBlog } from ".";

interface ILike extends Document {
  type: "product" | "blog";
  customer: ICustomer;
  product?: IProduct;
  blog?: IBlog;
}

export type { ILike };
