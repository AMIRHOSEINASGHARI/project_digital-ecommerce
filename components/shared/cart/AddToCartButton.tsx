"use client";

// next
import { usePathname, useRouter } from "next/navigation";
// auth
import { useSession } from "next-auth/react";
// cmp
import { SolarCartLarge4BoldDuotone } from "../../svg";
import { Button } from "../../ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const AddToCartButton = ({ stock }: { stock: number }) => {
  const { status } = useSession();
  const { push } = useRouter();
  const pathname = usePathname();

  const handleAddToCart = () => {
    if (status === "unauthenticated") {
      return push(`/login?backUrl=${pathname}`);
    }
  };

  if (status === "loading") {
    return <Skeleton className="w-full h-[40px] rounded-full xl:w-[192px]" />;
  }

  return (
    <Button
      disabled={stock === 0}
      className="bg-primary-1 dark:bg-primary-5 dark:text-primary-2 text-white rounded-full px-6 xl:px-10 gap-3 max-xl:w-full"
      onClick={handleAddToCart}
    >
      <SolarCartLarge4BoldDuotone className="text-icon-size" /> Add to Cart
    </Button>
  );
};

export default AddToCartButton;
