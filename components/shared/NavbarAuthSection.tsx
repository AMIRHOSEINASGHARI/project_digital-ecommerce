"use client";

// next
import Link from "next/link";
import { usePathname } from "next/navigation";
// cmp
import { SolarUserRoundedBoldDuotone } from "../svg";
import { Button } from "../ui/button";

const NavbarAuthSection = ({ email }: { email: string | null }) => {
  const pathname = usePathname();

  return (
    <Button asChild variant="icon">
      <Link href={email ? "/user/profile" : `/login?backUrl=${pathname}`}>
        <SolarUserRoundedBoldDuotone />
      </Link>
    </Button>
  );
};

export default NavbarAuthSection;
