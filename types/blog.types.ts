// mongoose
import { Document } from "mongoose";
// types
import { ILike, IAdmin } from "./";

interface IBlog extends Document {
  title: string;
  description: string;
  content: string;
  cover: string;
  tags: string[];
  likes: ILike[] | [];
  published: boolean;
  createdBy: IAdmin;
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

export type { IBlog, BlogsListParams, BlogsFilters };
