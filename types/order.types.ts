// mongoose
import { Document } from "mongoose";
// types
import { IAddress, ICustomer, IProduct } from "./";

type PaymentMethodType = "Paypal" | "Cash On Delivery" | "Credit Card";
type OrderStatus = "Pending" | "Completed" | "Canceled" | "Refunded";

interface IOrderItem {
  product: IProduct;
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
  shippingCost: number;
  isShippingFree: boolean;
}

interface IOrder extends Document {
  orderNumber: string;
  status: OrderStatus;
  deliveryAddress: IAddress;
  customer: ICustomer;
  paymentMethod: PaymentMethodType;
  items: IOrderItem[];
  summary: IOrderSummary;
  createdAt: Date;
  updatedAt: Date;
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
