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
// types
import { FetchCart } from "@/types";
// cmp
import { SolarBagBoldDuotone, SolarCartLarge4BoldDuotone } from "../svg";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import CustomSheet from "./CustomSheet";
import CartSheetItem from "./CartSheetItem";

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

  if (status === "unauthenticated") {
    return (
      <Button asChild variant="icon" className="relative line-clamp-none">
        <Link href={`/login?backUrl=${pathname}`}>
          {data && !!data?.totalItems && (
            <span className="absolute top-0 right-0 rounded-full py-.5 px-1 min-w-[18px] h-[18px] flex items-center justify-center bg-orange-600 text-white text-xs">
              {data?.totalItems}
            </span>
          )}
          <SolarCartLarge4BoldDuotone />
        </Link>
      </Button>
    );
  }

  return (
    <CustomSheet
      trigger={<SheetTrigger data={data} />}
      sheetTitle={<SheetTitle data={data} />}
      content={<SheetContent data={data} />}
      sheetFooter={<SheetFooter />}
    />
  );
};

const SheetTrigger = ({ data }: { data: FetchCart | undefined }) => {
  return (
    <Button asChild variant="icon" className="relative line-clamp-none">
      <div>
        {data && !!data?.totalItems && (
          <span className="absolute bottom-0 -right-1 rounded outline outline-white dark:outline-dark3 outline-[2px] py-.5 px-1 min-w-[18px] h-[18px] flex items-center justify-center bg-orange-600 text-white text-xs">
            {data?.totalItems}
          </span>
        )}
        <SolarCartLarge4BoldDuotone />
      </div>
    </Button>
  );
};

const SheetTitle = ({ data }: { data: FetchCart | undefined }) => (
  <div className="flex items-center gap-2">
    <SolarBagBoldDuotone className="text-icon-size text-icon-light dark:text-icon-dark" />
    <p>{data?.totalItems} items</p>
  </div>
);

const SheetContent = ({ data }: { data: FetchCart | undefined }) => (
  <div className="space-y-6">
    {data?.items?.map(({ product, quantity, discount, price }) => (
      <CartSheetItem
        key={product?._id}
        quantity={quantity}
        discount={discount}
        price={price}
        productId={product?._id}
        productImage={product?.images[0]}
        productTitle={product?.title}
        productStock={product?.stock}
      />
    ))}
  </div>
);

const SheetFooter = () => (
  <Button asChild className="w-full">
    <Link href="/cart">View cart</Link>
  </Button>
);

export default NavbarCartSection;
