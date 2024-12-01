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
    <div className="flex gap-5">
      <div className="max-lg:hidden">
        <ProductsFilter />
      </div>
      <ProductsList searchParams={searchParams} />
    </div>
  );
};

export default ProductsPage;
