// react
import { Suspense } from "react";
// types
import { ProductsListParams } from "@/types/product.types";
// cmp
import ProductsList from "./ui/ProductsList";
import ProductsFilter from "./ui/ProductsFilter";
import ProductsListSkeleton from "@/components/skeletons/ProductsListSkeleton";

const ProductsPage = async (props: {
  searchParams: Promise<ProductsListParams>;
}) => {
  const searchParams = await props.searchParams;
  const page = searchParams?.page || 1;
  const category = searchParams?.category || "";
  const discount = searchParams?.discount || "";
  const published = searchParams?.published || "";
  const search = searchParams?.search || "";
  const stock = searchParams?.stock || "";

  return (
    <div className="flex gap-5">
      <div className="max-lg:hidden">
        <ProductsFilter />
      </div>
      <Suspense
        fallback={<ProductsListSkeleton />}
        key={page + category + discount + published + search + stock}
      >
        <ProductsList searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default ProductsPage;
