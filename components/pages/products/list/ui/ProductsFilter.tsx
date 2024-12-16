import { Button } from "@/components/ui/button";
import { productCategory } from "@/constants";

const ProductsFilter = () => {
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

const FilterButton = ({
  title,
  icon,
  value,
}: {
  title: string;
  value: string;
  icon?: JSX.Element;
}) => {
  return (
    <li>
      <Button
        type="button"
        variant="action"
        className="w-full justify-start p-1.5"
      >
        {icon && (
          <div className="text-icon-size text-icon-light dark:text-icon-dark">
            {icon}
          </div>
        )}
        <span>{title}</span>
      </Button>
    </li>
  );
};

const FilterBox = ({
  title,
  buttons,
}: {
  title: string;
  buttons: JSX.Element[];
}) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-medium text-sm text-[var(--text-disabled)]">
        {title}
      </span>
      <ul className="flex flex-col gap-1">{buttons}</ul>
    </div>
  );
};
