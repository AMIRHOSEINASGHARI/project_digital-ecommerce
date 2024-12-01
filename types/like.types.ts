// mongoose
import { Document } from "mongoose";
// types
import { UserType } from "./user.types";
import { ProductType } from "./product.types";
import { BlogType } from "./blog.types";

interface LikeType extends Document {
  type: "product" | "blog";
  user: UserType;
  product?: ProductType;
  blog?: BlogType;
}

export type { LikeType };
