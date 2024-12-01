// mongoose
import { Document } from "mongoose";
// types
import { OrderType } from "./order.types";
import { LikeType } from "./like.types";
import { CommentType } from "./comment.types";
import { AdminType } from "./admin.types";

type ProductOrderType = {
  orderId: OrderType;
  quantity?: number;
};

interface ProductType extends Document {
  title: string;
  subDescription: string;
  content: string;
  images: string[];
  price: number;
  stock: number;
  discount: number;
  category: string;
  keywords: string[];
  orders: ProductOrderType[];
  brand: string;
  likes: LikeType[];
  comments: CommentType[];
  published: boolean;
  createdBy: AdminType;
  createdAt: Date;
}

type ProductsFilters = {
  stock?: { $gt: number } | { $gte: number; $lte: number } | number;
  discount?: { $gt: 0 } | number;
  category?: string;
  published?: boolean;
};

type ProductStock = "in-stock" | "out-of-stock" | "low-stock";
type ProductDiscount = "has-discount" | "no-discount";
type ProductPublish = "publish" | "draft";

type ProductsListParams = {
  search?: string;
  stock?: ProductStock;
  discount?: ProductDiscount;
  published?: ProductPublish;
  category?: string;
  page: string;
};

export type {
  ProductType,
  ProductsFilters,
  ProductStock,
  ProductDiscount,
  ProductPublish,
  ProductsListParams,
};
