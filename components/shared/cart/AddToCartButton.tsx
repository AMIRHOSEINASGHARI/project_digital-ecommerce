"use client";

// next
import { usePathname, useRouter } from "next/navigation";
// auth
import { useSession } from "next-auth/react";
// react query
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// actions
import { addToCart } from "@/actions/mutation/cart.actions";
// services
import { fetchCart } from "@/services/queries";
// lib
import { errorMessage, isInCart } from "@/lib/functions";
// cmp
import { SolarCartLarge4BoldDuotone } from "../../svg";
import { Button } from "../../ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import toast from "react-hot-toast";
import clsx from "clsx";
import CartAdd from "./CartAdd";
import CartDecrease from "./CartDecrease";

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
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart,
  });
  const { mutate: mutateAdd, isLoading: mutateAddLoading } = useMutation({
    mutationFn: addToCart,
  });

  const handleAddToCart = () => {
    if (status === "unauthenticated") {
      return push(`/login?backUrl=${pathname}`);
    }

    mutateAdd(
      { productId, currentQuantity: quantity },
      {
        onSuccess: ({ error, message }) => {
          if (error) {
            toast.error(error);
          }
          if (message) {
            toast.success(message);
            queryClient.invalidateQueries({ queryKey: ["cart"] });
          }
        },
        onError: (error) => {
          toast.error(errorMessage(error));
        },
      }
    );
  };

  if (status === "loading" || isLoading) {
    return <Skeleton className="w-full h-[40px] rounded-full xl:w-[192px]" />;
  }

  if (status === "unauthenticated" || !data) {
    return (
      <Button
        disabled={stock === 0 || mutateAddLoading}
        className="bg-primary-1 dark:bg-primary-5 dark:text-primary-2 text-white rounded-full px-6 xl:px-10 gap-3 max-xl:w-full"
        onClick={() => push(`/login?backUrl=${pathname}`)}
      >
        <SolarCartLarge4BoldDuotone className="text-icon-size" /> Add to Cart
      </Button>
    );
  }

  const quantity = isInCart(data.items, productId);

  if (isInCart(data.items, productId)) {
    return (
      <div
        className={clsx(
          "flex items-center gap-3 rounded-full px-1.5 max-xl:w-full max-xl:justify-between",
          stock === 0 &&
            "border border-rose-500 bg-rose-100 dark:bg-rose-950/50 dark:border-rose-500/50 text-rose-500",
          stock > 0 && "bg-light2 dark:bg-dark3"
        )}
      >
        <CartDecrease stock={stock} quantity={quantity} productId={productId} />
        <div
          className={clsx(
            "min-w-[62px] flex justify-center",
            quantity === 0 && "text-sm",
            quantity > 0 && "font-semibold"
          )}
        >
          <span>
            {stock > 0 ? (quantity === 0 ? "QTY" : quantity) : "Out of stock"}
          </span>
          {stock === quantity && stock > 0 && <span>/ Max</span>}
        </div>
        <CartAdd stock={stock} quantity={quantity} productId={productId} />
      </div>
    );
  }

  return (
    <Button
      disabled={stock === 0 || mutateAddLoading}
      className="bg-primary-1 dark:bg-primary-5 dark:text-primary-2 text-white rounded-full px-6 xl:px-10 gap-3 max-xl:w-full"
      onClick={handleAddToCart}
    >
      <SolarCartLarge4BoldDuotone className="text-icon-size" /> Add to Cart
    </Button>
  );
};

export default AddToCartButton;
