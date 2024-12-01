// mongoose
import { Document } from "mongoose";
// types
import { ProductType } from "./product.types";
import { UserType } from "./user.types";

type PaymentMethodType = "Paypal" | "Cash On Delivery" | "Credit Card";
type OrderStatus = "Pending" | "Completed" | "Canceled" | "Refunded";

type OrderItemType = {
  productId: ProductType;
  quantity: number;
  cost: number;
  discount: number;
  _id: string;
};

type OrderSummaryType = {
  totalProducts: number;
  totalPrice: number;
  totalDiscount: number;
  totalPayable: number;
};

interface OrderType extends Document {
  status: OrderStatus;
  deliveryAddress: string;
  userId: UserType;
  phoneNumber: number;
  displayName: string;
  paymentMethod: PaymentMethodType;
  items: OrderItemType[];
  summary: OrderSummaryType;
  createdAt: Date;
}

type OrdersListParams = {
  search?: string;
  status?: OrderStatus;
  startDate?: string;
  endDate?: string;
};

type OrdersFilters = {
  search?: string;
  status?: OrderStatus;
  createdAt?: { $gte: Date; $lte: Date };
};

export type {
  PaymentMethodType,
  OrderStatus,
  OrderItemType,
  OrderSummaryType,
  OrderType,
  OrdersListParams,
  OrdersFilters,
};
