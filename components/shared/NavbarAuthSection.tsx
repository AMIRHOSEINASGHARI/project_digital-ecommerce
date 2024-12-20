"use client";

// next
import Link from "next/link";
import { usePathname } from "next/navigation";
// cmp
import { SolarUserRoundedBoldDuotone } from "../svg";
import { Button } from "../ui/button";

const NavbarAuthSection = ({ userId }: { userId: string | null }) => {
  const pathname = usePathname();

  return (
    <Button asChild variant="icon">
      <Link href={userId ? "/user/profile" : `/login?backUrl="${pathname}"`}>
        <SolarUserRoundedBoldDuotone />
      </Link>
    </Button>
  );
};

export default NavbarAuthSection;
