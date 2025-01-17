// react
import { Suspense } from "react";
// types
import { ProductsListParams } from "@/types/product.types";
// constants
import { productsListPage_sortList } from "@/constants";
// cmp
import { Card } from "@/components/ui/card";
import ProductsList from "./ui/ProductsList";
import ProductsFilter from "./ui/ProductsFilter";
import ProductsListSkeleton from "@/components/skeletons/ProductsListSkeleton";
import MobileViewProductsFilter from "./ui/MobileViewProductsFilter";
import SortingList from "@/components/shared/SortingList";
import MobileViewProductsSorting from "./ui/MobileViewProductsSorting";

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
  const sort = searchParams?.sort || "";

  return (
    <>
      <aside className="max-xl:hidden w-[280px] xl:fixed xl:top-[80px] h-screen pb-[100px]">
        <Card
          className="h-full overflow-auto hideScrollBar"
          style={{ padding: 0 }}
        >
          <ProductsFilter />
        </Card>
      </aside>
      <main className="flex flex-col gap-5 xl:pl-[300px]">
        <div className="flex items-center gap-3">
          <div className="max-xl:hidden">
            <SortingList list={productsListPage_sortList} />
          </div>
          <MobileViewProductsFilter />
          <MobileViewProductsSorting />
        </div>
        <Suspense
          fallback={<ProductsListSkeleton />}
          key={page + category + discount + published + search + stock + sort}
        >
          <ProductsList searchParams={searchParams} />
        </Suspense>
      </main>
    </>
  );
};

export default ProductsPage;
