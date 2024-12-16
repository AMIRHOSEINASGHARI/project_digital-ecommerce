// react
import { Suspense } from "react";
// types
import { ProductsListParams } from "@/types/product.types";
// cmp
import { Card } from "@/components/ui/card";
import ProductsList from "./ui/ProductsList";
import ProductsFilter from "./ui/ProductsFilter";
import ProductsListSkeleton from "@/components/skeletons/ProductsListSkeleton";
import MobileViewProductsFilter from "./ui/MobileViewProductsFilter";
import SortingList from "@/components/shared/SortingList";

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

  const list = [
    { title: "Popular", value: "popular" },
    { title: "Newest", value: "newest" },
    { title: "Oldest", value: "oldest" },
    { title: "Cheapest", value: "cheapest" },
    { title: "Expensive", value: "expensive" },
  ];

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
      <div className="flex flex-col gap-5 xl:pl-[300px]">
        <div>
          <div className="max-xl:hidden">
            <SortingList list={list} />
          </div>
          <MobileViewProductsFilter />
        </div>
        <Suspense
          fallback={<ProductsListSkeleton />}
          key={page + category + discount + published + search + stock + sort}
        >
          <ProductsList searchParams={searchParams} />
        </Suspense>
      </div>
    </>
  );
};

export default ProductsPage;
