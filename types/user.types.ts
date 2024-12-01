// mongoose
import { Document } from "mongoose";
// types
import { ProductType } from "./product.types";
import { OrderType } from "./order.types";
import { LikeType } from "./like.types";
import { CommentType } from "./comment.types";

type CheckoutStatus = "pending" | "completed";

type CartItemType = {
  productId: ProductType;
  quantity?: number;
};

type CartType = {
  items?: CartItemType[];
  selectedItems?: ProductType[];
  totalProductsCount?: number;
  checkoutStatus?: CheckoutStatus;
};

interface UserType extends Document {
  username: string;
  displayName?: string;
  password: string;
  avatar?: string;
  phoneNumber?: number;
  address?: string;
  orders?: OrderType[];
  likes?: LikeType[];
  comments?: CommentType[];
  cart?: CartType;
  createdAt: Date;
}

export type { CheckoutStatus, CartItemType, CartType, UserType };
