// types
import { ProductsListParams } from "@/types/product.types";
// cmp
import ProductsList from "./ui/ProductsList";
import ProductsFilter from "./ui/ProductsFilter";

const ProductsPage = ({
  searchParams,
}: {
  searchParams: Promise<ProductsListParams>;
}) => {
  return (
    <>
      <ProductsList searchParams={searchParams} />
      <ProductsFilter />
    </>
  );
};

export default ProductsPage;
