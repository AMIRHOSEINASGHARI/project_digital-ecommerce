// next
import { Metadata } from "next";
// types
import { ProductsListParams } from "@/types/product.types";
// cmp
import ProductsPage from "@/components/pages/products/list/ProductsPage";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Products list",
};

const Products = ({
  searchParams,
}: {
  searchParams: Promise<ProductsListParams>;
}) => {
  return <ProductsPage searchParams={searchParams} />;
};

export default Products;
