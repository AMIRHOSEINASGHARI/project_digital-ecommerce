// mongoose
import { Document } from "mongoose";
// types
import { IProduct, ICustomer } from ".";

interface IComment extends Document {
  title: string;
  description: string;
  productId: IProduct;
  senderId: ICustomer;
  answer?: string;
  status?: string;
  published?: boolean;
  createdAt: Date;
}

export type { IComment };
