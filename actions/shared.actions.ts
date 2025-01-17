// types
import { ProductsFilters, ProductsListParams, ProductSort } from "@/types";

export const generateProductsFilters = (searchParams: ProductsListParams) => {
  const { search, stock, discount, category, published, sort } = searchParams;

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

  return { filters, query, sorting };
};
