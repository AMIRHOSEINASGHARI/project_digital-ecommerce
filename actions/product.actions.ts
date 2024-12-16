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
  ProductSort,
  ProductType,
} from "@/types/product.types";

export const getProducts = async (searchParams: ProductsListParams) => {
  try {
    await connectDB();

    const { page, search, stock, discount, category, published, sort } =
      searchParams;

    let query = {};
    let sorting = {};
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
    // product sorting filter
    if (sort) {
      const sortingOptions: Record<ProductSort, Record<string, number>> = {
        "best-seller": { orders: -1 },
        cheapest: { price: 1 },
        expensive: { price: -1 },
        newest: { createdAt: -1 },
        oldest: { createdAt: 1 },
        popular: { views: -1 },
      };

      sorting = sortingOptions[sort as ProductSort] || {};
    }

    const pageNumber = +page || 1;
    const perPage = 12;

    const [] = await Promise.all([]);

    const [totalProductsWithoutFilter, totalProducts, products] =
      await Promise.all([
        ProductModel.countDocuments(),
        ProductModel.countDocuments(filters),
        ProductModel.find({
          ...filters,
          ...query,
        })
          .skip((pageNumber - 1) * perPage)
          .limit(perPage)
          .sort({
            ...(sort ? sorting : { createdAt: -1 }),
          })
          .lean<ProductType[]>(),
      ]);

    const totalPages = Math.ceil(totalProducts / perPage);

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
