"use client";

// next
import Link from "next/link";
import { usePathname } from "next/navigation";
// cmp
import { SolarCartLarge4BoldDuotone } from "../svg";
import { Button } from "../ui/button";

const NavbarCheckoutSection = ({ userId }: { userId: string | null }) => {
  const pathname = usePathname();

  return (
    <Button asChild variant="icon">
      <Link href={userId ? "/user/profile" : `/login?backUrl="${pathname}"`}>
        <SolarCartLarge4BoldDuotone />
      </Link>
    </Button>
  );
};

export default NavbarCheckoutSection;
