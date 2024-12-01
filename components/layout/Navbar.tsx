// constants
import { navLinks } from "@/constants";
// cmp
import Logo from "../shared/Logo";
import NavLink from "../shared/NavLink";
import NavbarAuthSection from "../shared/NavbarAuthSection";

const Navbar = () => {
  return (
    <header className="border-b fixed w-full top-0 z-[1000] bg-white">
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
        <div>
          <NavbarAuthSection />
          <div>checkout section</div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
