// mongoose
import { Document } from "mongoose";
// types
import { LikeType } from "./like.types";
import { AdminType } from "./admin.types";

interface BlogType extends Document {
  title: string;
  description: string;
  content: string;
  cover: string;
  tags: string[];
  likes: LikeType[] | [];
  published: boolean;
  createdBy: AdminType;
  createdAt: Date;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  enableComments: boolean;
}

type BlogsListParams = {
  search?: string;
  status?: "Published" | "Draft";
  sort?: "Latest" | "Oldest";
};

type BlogsFilters = {
  search?: string;
  published?: boolean;
};

export type { BlogType, BlogsListParams, BlogsFilters };
