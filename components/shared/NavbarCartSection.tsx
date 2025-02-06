"use client";

// next
import Link from "next/link";
import { usePathname } from "next/navigation";
// auth
import { useSession } from "next-auth/react";
// cmp
import { SolarCartLarge4BoldDuotone } from "../svg";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

const NavbarCartSection = () => {
  const pathname = usePathname();
  const { status } = useSession();

  if (status === "loading") {
    return <Skeleton className="rounded-full size-[25px]" />;
  }

  return (
    <Button asChild variant="icon">
      <Link
        href={
          status === "authenticated" ? "/cart" : `/login?backUrl=${pathname}`
        }
      >
        <SolarCartLarge4BoldDuotone />
      </Link>
    </Button>
  );
};

export default NavbarCartSection;
