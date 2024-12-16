"use client";

// constants
import { productsListPage_sortList } from "@/constants";
// cmp
import { SolarSortFromTopToBottomBoldDuotone } from "@/components/svg";
import { Button } from "@/components/ui/button";
import CustomSheet from "@/components/shared/CustomSheet";
import SortingList from "@/components/shared/SortingList";

const MobileViewProductsSorting = () => {
  return (
    <div className="xl:hidden">
      <CustomSheet
        asChildTrigger
        closeSheetOnClick
        side="bottom"
        content={<SortingList list={productsListPage_sortList} />}
        sheetContentClassName="h-fit"
        wrapperClassName="bg-white/80"
        trigger={
          <Button
            variant="outline"
            className="rounded-full gap-2"
            type="button"
          >
            <SolarSortFromTopToBottomBoldDuotone className="text-icon-size text-icon-light dark:text-icon-dark" />
            Sort by
          </Button>
        }
        sheetTitle="Sorting"
      />
    </div>
  );
};

export default MobileViewProductsSorting;
