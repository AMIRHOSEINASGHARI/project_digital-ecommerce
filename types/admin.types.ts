// mongoose
import { Document } from "mongoose";
// types
import { BlogType } from "./blog.types";
import { ProductType } from "./product.types";

type AdminRole = "OWNER";

type AdminStatus = "Active" | "Pending" | "Banned" | "Rejected";

interface AdminType extends Document {
  username: string;
  password: string;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  country: string;
  avatar: string;
  role: AdminRole;
  productsCreated: ProductType[] | [];
  blogsCreated: BlogType[] | [];
  createdAt: Date;
  state: string;
  city: string;
  company: string;
  zipcode: number;
  status: AdminStatus;
  about: string;
  isVerified: boolean;
}

export type { AdminRole, AdminStatus, AdminType };
