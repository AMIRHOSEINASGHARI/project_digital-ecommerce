// mongoose
import { Document } from "mongoose";
// types
import { IProduct, IBlog } from "./";

type AdminRole = "OWNER";

type AdminStatus = "Active" | "Pending" | "Banned" | "Rejected";

interface IAdmin extends Document {
  username: string;
  password: string;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  country: string;
  avatar: string;
  role: AdminRole;
  productsCreated: IProduct[] | [];
  blogsCreated: IBlog[] | [];
  createdAt: Date;
  state: string;
  city: string;
  company: string;
  zipcode: number;
  status: AdminStatus;
  about: string;
  isVerified: boolean;
}

export type { AdminRole, AdminStatus, IAdmin };
