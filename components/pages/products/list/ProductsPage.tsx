// react
import { Suspense } from "react";
// types
import { ProductsListParams } from "@/types/product.types";
// cmp
import ProductsList from "./ui/ProductsList";
import ProductsFilter from "./ui/ProductsFilter";
import ProductsListSkeleton from "@/components/skeletons/ProductsListSkeleton";
import ProductsSorting from "./ui/ProductsSorting";
import { Card } from "@/components/ui/card";

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
    <div>
      <aside className="max-xl:hidden w-[280px] xl:fixed xl:top-[80px] h-screen pb-[100px]">
        <Card
          className="h-full overflow-auto hideScrollBar"
          style={{ padding: 0 }}
        >
          <ProductsFilter />
        </Card>
      </aside>
      <div className="flex flex-col gap-5 xl:pl-[300px]">
        <ProductsSorting />
        <Suspense
          fallback={<ProductsListSkeleton />}
          key={page + category + discount + published + search + stock}
        >
          <ProductsList searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
};

export default ProductsPage;
