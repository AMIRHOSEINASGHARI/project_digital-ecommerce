// constants
import { navLinks } from "@/constants";
// cmp
import { SolarHamburgerMenuLineDuotone } from "../svg";
import { Button } from "../ui/button";
import CustomSheet from "./CustomSheet";
import Logo from "./Logo";
import NavLink from "./NavLink";

const MobileNav = () => {
  return (
    <CustomSheet
      asChildTrigger
      closeSheetOnClick
      side="left"
      trigger={
        <Button variant="icon" type="button">
          <SolarHamburgerMenuLineDuotone />
        </Button>
      }
      sheetTitle={<Logo showText />}
      content={
        <ul className="flex flex-col gap-1">
          {navLinks.map((nav) => (
            <li key={nav.href}>
              <NavLink {...nav} isMobile />
            </li>
          ))}
        </ul>
      }
    />
  );
};

export default MobileNav;
