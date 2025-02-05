// mongoose
import { Document } from "mongoose";
// types
import { IAddress, IComment, ILike, IOrder } from ".";
import { ICart } from "./cart.types";

interface ICustomer extends Document {
  email: string;
  displayName: string;
  password: string;
  avatar: string;
  phoneNumber: string;
  addresses: IAddress[];
  orders: IOrder[];
  likes: ILike[];
  comments: IComment[];
  cart: ICart;
  createdAt: Date;
  updatedAt: Date;
}

export type { ICustomer };
