// mongoose
import { Document } from "mongoose";
// types
import { ICustomer } from "./customer.types";
import { IProduct } from "./product.types";

type CheckoutStatus = "Pending" | "Completed";

interface ICartItem {
  product: IProduct;
  quantity: number;
  price: number;
  discount: number;
}

interface ICart extends Document {
  customer: ICustomer;
  items: ICartItem[];
  totalPrice: number;
  totalItems: number;
  totalDiscount: number;
  totalPayable: number;
  checkoutStatus: CheckoutStatus;
  createdAt?: Date;
  updatedAt?: Date;
}

export type { CheckoutStatus, ICartItem, ICart };
