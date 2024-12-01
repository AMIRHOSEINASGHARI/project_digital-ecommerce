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

const Navbar = () => {
  const session = getServerSession();

  return (
    <header className="border-b border-border-light dark:border-border-dark fixed w-full top-0 z-[1000] bg-white dark:bg-dark2">
      <div className="max-width flex items-center justify-between">
        <div className="flex items-center gap-14">
          <Logo showText />
          <nav>
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
          <NavbarAuthSection userId={session?.userId ?? null} />
          <NavbarCheckoutSection userId={session?.userId ?? null} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
