// mongoose
import { Document } from "mongoose";
import { IUser, IProduct } from "./";
// types

type PaymentMethodType = "Paypal" | "Cash On Delivery" | "Credit Card";
type OrderStatus = "Pending" | "Completed" | "Canceled" | "Refunded";

interface IOrderItem {
  productId: IProduct;
  quantity: number;
  cost: number;
  discount: number;
  _id: string;
}

interface IOrderSummary {
  totalProducts: number;
  totalPrice: number;
  totalDiscount: number;
  totalPayable: number;
}

interface IOrder extends Document {
  status: OrderStatus;
  deliveryAddress: string;
  userId: IUser;
  phoneNumber: number;
  displayName: string;
  paymentMethod: PaymentMethodType;
  items: IOrderItem[];
  summary: IOrderSummary;
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
  IOrderItem,
  IOrderSummary,
  IOrder,
  OrdersListParams,
  OrdersFilters,
};
