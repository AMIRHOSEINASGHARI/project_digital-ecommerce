"use server";

// enums
import { ResponseCodes, ResponseMessages } from "@/enums";
// lib
import connectDB from "@/lib/connectDB";
// models
import ProductModel from "@/models/product";
// types
import {
  ProductsFilters,
  ProductsListParams,
  ProductType,
} from "@/types/product.types";

export const getProducts = async (searchParams: ProductsListParams) => {
  try {
    await connectDB();

    const { page, search, stock, discount, category, published } = searchParams;

    let query = {};
    const filters: ProductsFilters = {};

    // search query filter
    if (search) {
      query = { $text: { $search: search } };
    }
    // product stock filter
    if (stock) {
      if (stock === "in-stock") {
        filters.stock = { $gt: 10 };
      } else if (stock === "low-stock") {
        filters.stock = { $gte: 1, $lte: 10 };
      } else {
        filters.stock = 0;
      }
    }
    // product discount filter
    if (discount) {
      if (discount == "has-discount") {
        filters.discount = { $gt: 0 };
      } else {
        filters.discount = 0;
      }
    }
    // product category filter
    if (category) {
      filters.category = category;
    }
    // product publish status filter
    if (published) {
      if (published === "publish") {
        filters.published = true;
      } else {
        filters.published = false;
      }
    }

    const pageNumber = +page || 1;
    const perPage = 15;
    const totalProductsWithoutFilter = await ProductModel.countDocuments();
    const totalProducts = await ProductModel.countDocuments({
      ...query,
      ...filters,
    });
    const totalPages = Math.ceil(totalProducts / perPage);

    const products = await ProductModel.find({ ...filters, ...query })
      .skip((pageNumber - 1) * perPage)
      .limit(perPage)
      .sort({
        createdAt: -1,
      })
      .lean<ProductType[]>();

    return {
      products,
      totalPages,
      totalProducts,
      totalProductsWithoutFilter,
      message: ResponseMessages.SUCCESSFULLY_FETCHED,
      code: ResponseCodes.SUCCESSFULLY_FETCHED,
    };
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
