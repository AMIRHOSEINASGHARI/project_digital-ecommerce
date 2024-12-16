// cmp
import { Button } from "@/components/ui/button";
import CustomSheet from "@/components/shared/CustomSheet";
import ProductsFilter from "./ProductsFilter";
import { SolarFilterBoldDuotone } from "@/components/svg";

const MobileViewProductsFilter = () => {
  return (
    <div className="xl:hidden">
      <CustomSheet
        trigger={
          <Button variant="action" type="button">
            <SolarFilterBoldDuotone className="text-icon-size" />
          </Button>
        }
        asChildTrigger
        sheetTitle="Filters"
        side="bottom"
        content={<ProductsFilter />}
        sheetContentClassName="h-[70vh]"
        wrapperClassName="bg-white/80"
        closeSheetOnClick
      />
    </div>
  );
};

export default MobileViewProductsFilter;
