// mongoose
import { Document } from "mongoose";
// types
import { IProduct, IUser } from ".";

interface IComment extends Document {
  title: string;
  description: string;
  productId: IProduct;
  senderId: IUser;
  answer?: string;
  status?: string;
  published?: boolean;
  createdAt: Date;
}

export type { IComment };
