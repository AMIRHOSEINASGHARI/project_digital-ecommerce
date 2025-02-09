"use client";

// next
import Link from "next/link";
import { usePathname } from "next/navigation";
// auth
import { useSession } from "next-auth/react";
// react query
import { useQuery } from "@tanstack/react-query";
// services
import { fetchCart } from "@/services/queries";
// cmp
import { SolarCartLarge4BoldDuotone } from "../svg";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

const NavbarCartSection = () => {
  const pathname = usePathname();
  const { status } = useSession();
  const { data, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart,
  });

  if (status === "loading" || isLoading) {
    return <Skeleton className="rounded-full size-[25px]" />;
  }

  return (
    <Button asChild variant="icon" className="relative line-clamp-none">
      <Link
        href={
          status === "authenticated" ? "/cart" : `/login?backUrl=${pathname}`
        }
      >
        {data && !!data?.totalItems && (
          <span className="absolute top-0 right-0 rounded-full py-.5 px-1 min-w-[18px] h-[18px] flex items-center justify-center bg-orange-600 text-white text-xs">
            {data?.totalItems}
          </span>
        )}
        <SolarCartLarge4BoldDuotone />
      </Link>
    </Button>
  );
};

export default NavbarCartSection;
