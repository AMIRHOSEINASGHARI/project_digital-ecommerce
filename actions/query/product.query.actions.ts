"use server";

// lib
import { DOCUMENTS_LIMIT } from "@/lib/vars";
// models
import { ProductModel } from "@/models";
// types
import { ProductsListParams, IProduct } from "@/types/product.types";
// actions
import { generateProductsFilters } from "../shared.actions";
import { notFound } from "next/navigation";

const getProducts = async (searchParams: ProductsListParams) => {
  try {
    const { page, sort } = searchParams;

    const { filters, query, sorting } = generateProductsFilters(searchParams);

    const pageNumber = Number(page) || 1;
    const skip = (pageNumber - 1) * DOCUMENTS_LIMIT;

    const [totalProductsWithoutFilter, totalProducts, products] =
      await Promise.all([
        ProductModel.countDocuments(),
        ProductModel.countDocuments(filters),
        ProductModel.find({ ...filters, ...query })
          .skip(skip)
          .limit(DOCUMENTS_LIMIT)
          .sort({ ...(sort ? sorting : { createdAt: -1 }) })
          .lean<IProduct[]>(),
      ]);

    const totalPages = Math.ceil(totalProducts / DOCUMENTS_LIMIT);

    return {
      products,
      totalPages,
      totalProducts,
      totalProductsWithoutFilter,
    };
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

const getTotalProductsPages = async (searchParams: ProductsListParams) => {
  try {
    const { filters, query } = generateProductsFilters(searchParams);

    const products = await ProductModel.countDocuments({
      published: true,
      ...filters,
      ...query,
    });

    const totalPages = Math.ceil(products / DOCUMENTS_LIMIT) || 1;

    return totalPages;
  } catch (error: any) {
    throw new Error(error);
  }
};

const getProduct = async (id: string) => {
  try {
    const product = await ProductModel.findOne({
      _id: id,
      published: true,
    })
      .select("-createdBy -createdAt")
      .lean<IProduct>();

    return product;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

const getRelatedProducts = async (id: string) => {
  try {
    const product = await ProductModel.findOne({
      _id: id,
      published: true,
    }).select("category");

    if (!product) notFound();

    const relatedProducts = await ProductModel.find({
      _id: { $ne: id },
      published: true,
      stock: { $gt: 0 },
      category: product?.category,
    })
      .select("-createdBy -createdAt")
      .lean<IProduct[]>();

    return relatedProducts;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

export { getProducts, getTotalProductsPages, getProduct, getRelatedProducts };
