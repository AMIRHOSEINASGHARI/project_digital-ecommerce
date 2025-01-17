// mongoose
import { Document } from "mongoose";
// types
import { IAdmin, IComment, ILike, IOrder } from "./";

interface IProductOrder {
  orderId: IOrder;
  quantity?: number;
}

interface IProduct extends Document {
  title: string;
  subDescription: string;
  content: string;
  images: string[];
  price: number;
  stock: number;
  discount: number;
  category: string;
  keywords: string[];
  orders: IProductOrder[];
  brand: string;
  likes: ILike[];
  comments: IComment[];
  published: boolean;
  createdBy: IAdmin;
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
type ProductSort =
  | "popular"
  | "newest"
  | "oldest"
  | "cheapest"
  | "expensive"
  | "best-seller";

type ProductsListParams = {
  search?: string;
  stock?: ProductStock;
  discount?: ProductDiscount;
  published?: ProductPublish;
  category?: string;
  page: string;
  sort: ProductSort;
};

export type {
  IProduct,
  ProductsFilters,
  ProductStock,
  ProductDiscount,
  ProductPublish,
  ProductsListParams,
  ProductSort,
};
