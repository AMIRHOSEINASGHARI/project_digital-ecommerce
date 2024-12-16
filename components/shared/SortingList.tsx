"use client";

// hooks
import { useHandleSearchParams } from "@/hooks";
// cmp
import { Button } from "../ui/button";
import { CheckRegular, SolarSortFromTopToBottomBoldDuotone } from "../svg";
import clsx from "clsx";

type SortingListProps = {
  list: {
    value: string;
    title: string;
  }[];
};

const SortingList = ({ list }: SortingListProps) => {
  const { handleSetQuery, handleDeleteQuery, searchParams } =
    useHandleSearchParams("sort");

  const params = new URLSearchParams(searchParams);

  return (
    <div className="flex flex-col gap-3 xl:flex-row xl:flex-wrap">
      <div className="flex items-center gap-2">
        <SolarSortFromTopToBottomBoldDuotone className="text-icon-size text-icon-light dark:text-icon-dark" />
        <span className="text-sm">Sort by:</span>
      </div>
      {list.map((item) => {
        const isActive = params.get("sort") === item.value;

        return (
          <Button
            key={item.value}
            type="button"
            variant="action"
            className={clsx(
              "justify-between max-xl:w-full",
              isActive && "text-primary-1 dark:text-primary-5"
            )}
            onClick={() =>
              isActive ? handleDeleteQuery("sort") : handleSetQuery(item.value)
            }
          >
            {isActive && (
              <CheckRegular className="text-primary-1 dark:text-primary-5" />
            )}
            {item.title}
          </Button>
        );
      })}
    </div>
  );
};

export default SortingList;
