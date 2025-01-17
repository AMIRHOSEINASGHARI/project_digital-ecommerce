// mongoose
import { Document } from "mongoose";
// types
import { IUser, IProduct, IBlog } from ".";

interface ILike extends Document {
  type: "product" | "blog";
  user: IUser;
  product?: IProduct;
  blog?: IBlog;
}

export type { ILike };
