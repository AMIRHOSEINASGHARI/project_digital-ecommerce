// mongoose
import { Document } from "mongoose";
// types
import { IComment, ILike, IOrder, IProduct } from ".";

type CheckoutStatus = "pending" | "completed";

interface ICartItem {
  productId: IProduct;
  quantity?: number;
}

interface ICart {
  items?: ICartItem[];
  selectedItems?: IProduct[];
  totalProductsCount?: number;
  checkoutStatus?: CheckoutStatus;
}

interface IUser extends Document {
  username: string;
  displayName?: string;
  password: string;
  avatar?: string;
  phoneNumber?: number;
  address?: string;
  orders?: IOrder[];
  likes?: ILike[];
  comments?: IComment[];
  cart?: ICart;
  createdAt: Date;
}

export type { CheckoutStatus, ICartItem, ICart, IUser };
