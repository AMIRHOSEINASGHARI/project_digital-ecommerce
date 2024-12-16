"use client";

// hooks
import { useHandleSearchParams } from "@/hooks";
// cmp
import { SolarFilterBoldDuotone } from "@/components/svg";
import { Button } from "@/components/ui/button";
import CustomSheet from "@/components/shared/CustomSheet";
import ProductsFilter from "./ProductsFilter";
import DeleteAllPageQueries from "@/components/shared/DeleteAllPageQueries";

const MobileViewProductsFilter = () => {
  const { searchParams } = useHandleSearchParams();
  const params = new URLSearchParams(searchParams);

  return (
    <div className="xl:hidden">
      <CustomSheet
        asChildTrigger
        closeSheetOnClick
        side="bottom"
        content={<ProductsFilter />}
        sheetContentClassName="h-[70vh]"
        wrapperClassName="bg-white/80"
        trigger={
          <Button
            variant="outline"
            className="rounded-full gap-2"
            type="button"
          >
            <SolarFilterBoldDuotone className="text-icon-size text-icon-light dark:text-icon-dark" />
            Filters
          </Button>
        }
        sheetTitle={
          <div className="w-full flex items-center gap-5">
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
        }
      />
    </div>
  );
};

export default MobileViewProductsFilter;
