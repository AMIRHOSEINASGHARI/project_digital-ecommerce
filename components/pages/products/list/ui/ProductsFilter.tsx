// cmp
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
  return (
    <div className="w-full h-full">
      <div className="space-y-3 px-card py-3 rounded-t-card border-b w-full border-border-light bg-white dark:bg-dark2 dark:border-border-dark absolute top-0">
        <h6>Filters</h6>
      </div>
      <div className="pt-[70px] px-card pb-3 space-y-5">
        <FilterBox
          title="Stock:"
          buttons={stockStatus.map((item) => (
            <FilterButton
              key={item.value}
              title={item.title}
              value={item.value}
            />
          ))}
        />
        <FilterBox
          title="Discount:"
          buttons={discountStatus.map((item) => (
            <FilterButton
              key={item.value}
              title={item.title}
              value={item.value}
            />
          ))}
        />
        <FilterBox
          title="Category:"
          buttons={productCategory.map((item) => (
            <FilterButton
              key={item.value}
              title={item.title}
              value={item.value}
              icon={item.icon}
            />
          ))}
        />
      </div>
    </div>
  );
};

export default ProductsFilter;
