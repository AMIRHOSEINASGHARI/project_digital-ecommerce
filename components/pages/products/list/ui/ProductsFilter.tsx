"use client";

// hooks
import { useHandleSearchParams } from "@/hooks";
// constants
import { productCategory } from "@/constants";
// cmp
import FilterButton from "@/components/shared/FilterButton";
import FilterBox from "@/components/shared/FilterBox";

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
  const {
    handleSetQuery: handleSetQueryForStock,
    handleDeleteQuery: handleDeleteQueryForStock,
    searchParams: searchParamsForStock,
  } = useHandleSearchParams("stock");
  const {
    handleSetQuery: handleSetQueryForDiscount,
    handleDeleteQuery: handleDeleteQueryForDiscount,
    searchParams: searchParamsForDiscount,
  } = useHandleSearchParams("discount");
  const {
    handleSetQuery: handleSetQueryForCategory,
    handleDeleteQuery: handleDeleteQueryForCategory,
    searchParams: searchParamsForCategory,
  } = useHandleSearchParams("category");

  return (
    <div className="w-full h-full">
      <div className="max-xl:hidden space-y-3 px-card py-3 rounded-t-card border-b w-full border-border-light bg-white dark:bg-dark2 dark:border-border-dark absolute top-0">
        <h6>Filters</h6>
      </div>
      <div className="xl:pt-[70px] xl:px-card xl:pb-3 space-y-5">
        <FilterBox
          title="Stock:"
          buttons={stockStatus.map((item) => {
            const params = new URLSearchParams(searchParamsForStock);
            const isActive = params?.get("stock") === item.value;

            return (
              <FilterButton
                key={item.value}
                title={item.title}
                value={item.value}
                isActive={isActive}
                queryName={"stock"}
                handleSetQuery={handleSetQueryForStock}
                handleDeleteQuery={handleDeleteQueryForStock}
              />
            );
          })}
        />
        <FilterBox
          title="Discount:"
          buttons={discountStatus.map((item) => {
            const params = new URLSearchParams(searchParamsForDiscount);
            const isActive = params?.get("discount") === item.value;

            return (
              <FilterButton
                key={item.value}
                title={item.title}
                value={item.value}
                isActive={isActive}
                queryName={"discount"}
                handleSetQuery={handleSetQueryForDiscount}
                handleDeleteQuery={handleDeleteQueryForDiscount}
              />
            );
          })}
        />
        <FilterBox
          title="Category:"
          buttons={productCategory.map((item) => {
            const params = new URLSearchParams(searchParamsForCategory);
            const isActive = params?.get("category") === item.value;

            return (
              <FilterButton
                key={item.value}
                title={item.title}
                icon={item.icon}
                value={item.value}
                isActive={isActive}
                queryName={"category"}
                handleSetQuery={handleSetQueryForCategory}
                handleDeleteQuery={handleDeleteQueryForCategory}
              />
            );
          })}
        />
      </div>
    </div>
  );
};

export default ProductsFilter;
