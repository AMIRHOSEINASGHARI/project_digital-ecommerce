"use client";

// next
import { useSearchParams } from "next/navigation";
// hooks
import { useHandleSearchParams } from "@/hooks";
// constants
import { productCategory } from "@/constants";
// cmp
import FilterButton from "@/components/shared/FilterButton";
import FilterBox from "@/components/shared/FilterBox";
import DeleteAllPageQueries from "@/components/shared/DeleteAllPageQueries";

const stockStatus = [
  {
    title: "In stock",
    value: "in-stock",
  },
  {
    title: "Low stock",
    value: "low-stock",
  },
  {
    title: "Out of stock",
    value: "out-of-stock",
  },
];
const discountStatus = [
  {
    title: "Has discount",
    value: "has-discount",
  },
  {
    title: "No discount",
    value: "no-discount",
  },
];

const ProductsFilter = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const {
    handleSetQuery: setQueryForStock,
    handleDeleteQuery: deleteQueryForStock,
  } = useHandleSearchParams("stock");
  const {
    handleSetQuery: setQueryForDiscount,
    handleDeleteQuery: deleteQueryForDiscount,
  } = useHandleSearchParams("discount");
  const {
    handleSetQuery: setQueryForCategory,
    handleDeleteQuery: deleteQueryForCategory,
  } = useHandleSearchParams("category");

  return (
    <div className="w-full h-full">
      <div className="max-xl:hidden px-card py-3 rounded-t-card border-b w-full border-border-light bg-white dark:bg-dark2 dark:border-border-dark absolute top-0 flex items-center justify-between">
        <div className="relative w-fit">
          <h6>Filters</h6>
          {params.size !== 0 && (
            <span className="bg-rose-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center absolute top-0 -right-3 outline outline-white dark:outline-dark2">
              {params.size}
            </span>
          )}
        </div>
        <DeleteAllPageQueries filters={["stock", "discount", "category"]} />
      </div>
      <div className="xl:pt-[70px] xl:px-card xl:pb-3 space-y-5">
        <FilterBox
          title="Stock:"
          buttons={stockStatus.map((item) => {
            const isActive = params?.get("stock") === item.value;

            return (
              <FilterButton
                key={item.value}
                title={item.title}
                value={item.value}
                isActive={isActive}
                queryName={"stock"}
                handleSetQuery={setQueryForStock}
                handleDeleteQuery={deleteQueryForStock}
              />
            );
          })}
        />
        <FilterBox
          title="Discount:"
          buttons={discountStatus.map((item) => {
            const isActive = params?.get("discount") === item.value;

            return (
              <FilterButton
                key={item.value}
                title={item.title}
                value={item.value}
                isActive={isActive}
                queryName={"discount"}
                handleSetQuery={setQueryForDiscount}
                handleDeleteQuery={deleteQueryForDiscount}
              />
            );
          })}
        />
        <FilterBox
          title="Category:"
          buttons={productCategory.map((item) => {
            const isActive = params?.get("category") === item.value;

            return (
              <FilterButton
                key={item.value}
                title={item.title}
                icon={item.icon}
                value={item.value}
                isActive={isActive}
                queryName={"category"}
                handleSetQuery={setQueryForCategory}
                handleDeleteQuery={deleteQueryForCategory}
              />
            );
          })}
        />
      </div>
    </div>
  );
};

export default ProductsFilter;
