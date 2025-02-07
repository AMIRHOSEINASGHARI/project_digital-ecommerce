"use client";

// next
import { usePathname, useRouter } from "next/navigation";
// auth
import { useSession } from "next-auth/react";
// react query
import { useMutation, useQuery } from "@tanstack/react-query";
// actions
import { addToCart } from "@/actions/mutation/cart.actions";
// services
import { fetchCart } from "@/services/queries";
// lib
import { errorMessage } from "@/lib/functions";
// cmp
import { SolarCartLarge4BoldDuotone } from "../../svg";
import { Button } from "../../ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import toast from "react-hot-toast";

const AddToCartButton = ({
  stock,
  productId,
}: {
  stock: number;
  productId: string;
}) => {
  const { status } = useSession();
  const { push } = useRouter();
  const pathname = usePathname();
  const { isLoading, isError } = useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart,
  });
  const { mutate, isLoading: mutateLoading } = useMutation({
    mutationFn: addToCart,
  });

  if (status === "loading" || isLoading) {
    return <Skeleton className="w-full h-[40px] rounded-full xl:w-[192px]" />;
  }

  if (isError) {
    return "Error!";
  }

  const handleAddToCart = () => {
    if (status === "unauthenticated") {
      return push(`/login?backUrl=${pathname}`);
    }

    mutate(
      { productId },
      {
        onSuccess: ({ error, message }) => {
          if (error) {
            toast.error(error);
          }
          if (message) {
            toast.success(message);
          }
        },
        onError: (error) => {
          toast.error(errorMessage(error));
        },
      }
    );
  };

  return (
    <Button
      disabled={stock === 0 || mutateLoading}
      className="bg-primary-1 dark:bg-primary-5 dark:text-primary-2 text-white rounded-full px-6 xl:px-10 gap-3 max-xl:w-full"
      onClick={handleAddToCart}
    >
      <SolarCartLarge4BoldDuotone className="text-icon-size" /> Add to Cart
    </Button>
  );
};

export default AddToCartButton;
