// constants
import { navLinks } from "@/constants";
// lib
import { getServerSession } from "@/lib/session";
// cmp
import Logo from "../shared/Logo";
import NavLink from "../shared/NavLink";
import NavbarAuthSection from "../shared/NavbarAuthSection";
import NavbarCheckoutSection from "../shared/NavbarCheckoutSection";
import DarkModeToggle from "../shared/DarkModeToggle";
import MobileNav from "../shared/MobileNav";
import NavbarSearchSection from "../shared/navbar-search/NavbarSearchSection";

const Navbar = () => {
  const session = getServerSession();

  return (
    <header className="border-b border-color-main fixed w-full top-0 z-30 bg-white dark:bg-dark2">
      <div className="max-width flex items-center justify-between max-xl:px-4 max-xl:py-3 xl:px-4">
        <div className="flex items-center gap-14">
          <div className="flex items-center gap-3">
            <div className="xl:hidden">
              <MobileNav />
            </div>
            <Logo showText textClassName="max-xl:hidden" />
          </div>
          <nav className="max-xl:hidden">
            <ul className="flex items-center gap-7">
              {navLinks.map((nav) => (
                <li key={nav.href}>
                  <NavLink {...nav} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <DarkModeToggle />
          <NavbarSearchSection />
          <NavbarAuthSection userId={session?.userId ?? null} />
          <NavbarCheckoutSection userId={session?.userId ?? null} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
