// mongoose
import { Document } from "mongoose";
// types
import { ProductType } from "./product.types";
import { UserType } from "./user.types";

interface CommentType extends Document {
  title: string;
  description: string;
  productId: ProductType;
  senderId: UserType;
  answer?: string;
  status?: string;
  published?: boolean;
  createdAt: Date;
}

export type { CommentType };
