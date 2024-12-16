// types
import { FilterButtonProps } from "@/types/components";
// cmp
import { Button } from "../ui/button";
import { CheckRegular } from "../svg";
import clsx from "clsx";

const FilterButton = ({
  title,
  icon,
  value,
  isActive,
  queryName,
  handleSetQuery,
  handleDeleteQuery,
}: FilterButtonProps) => {
  return (
    <li>
      <Button
        type="button"
        variant="action"
        className="w-full justify-between p-1.5"
        onClick={() =>
          isActive ? handleDeleteQuery(queryName) : handleSetQuery(value)
        }
      >
        <div className="flex items-center gap-3">
          {icon && (
            <div
              className={clsx(
                "text-icon-size",
                isActive && "text-primary-1 dark:text-primary-5",
                !isActive && "text-icon-light dark:text-icon-dark"
              )}
            >
              {icon}
            </div>
          )}
          <span
            className={clsx(isActive && "text-primary-1 dark:text-primary-5")}
          >
            {title}
          </span>
        </div>
        {isActive && (
          <CheckRegular className="text-primary-1 dark:text-primary-5" />
        )}
      </Button>
    </li>
  );
};

export default FilterButton;
