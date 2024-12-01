// cmp
import { Button } from "../ui/button";
import { SolarHamburgerMenuLineDuotone } from "../svg";
import CustomSheet from "./CustomSheet";
import Logo from "./Logo";

const MobileNav = () => {
  return (
    <CustomSheet
      asChildTrigger
      side="left"
      trigger={
        <Button variant="icon" type="button">
          <SolarHamburgerMenuLineDuotone />
        </Button>
      }
      sheetTitle={<Logo showText />}
      content={<div></div>}
    />
  );
};

export default MobileNav;
