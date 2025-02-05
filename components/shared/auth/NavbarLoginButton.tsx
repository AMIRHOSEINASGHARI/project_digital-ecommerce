"use client";

// next
import Link from "next/link";
import { usePathname } from "next/navigation";
// cmp
import { SolarUserRoundedBoldDuotone } from "../../svg";
import { Button } from "../../ui/button";

const NavbarLoginButton = () => {
  const pathname = usePathname();

  return (
    <Button asChild variant="icon">
      <Link href={`/login?backUrl=${pathname}`}>
        <SolarUserRoundedBoldDuotone />
      </Link>
    </Button>
  );
};

export default NavbarLoginButton;
