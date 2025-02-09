"use client";

// next
import { usePathname, useRouter } from "next/navigation";
// auth
import { useSession } from "next-auth/react";
// react query
import { useMutation, useQuery } from "@tanstack/react-query";
// actions
import { addToCart, decreaseCartItem } from "@/actions/mutation/cart.actions";
// services
import { fetchCart } from "@/services/queries";
// lib
import { errorMessage, isInCart } from "@/lib/functions";
// cmp
import { SolarCartLarge4BoldDuotone, SolarTrashBold } from "../../svg";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "../../ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import toast from "react-hot-toast";
import clsx from "clsx";

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
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart,
  });
  const { mutate: mutateAdd, isLoading: mutateAddLoading } = useMutation({
    mutationFn: addToCart,
  });
  const { mutate: mutateDecrease, isLoading: mutateDecreaseLoading } =
    useMutation({
      mutationFn: decreaseCartItem,
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
            refetch();
          }
        },
        onError: (error) => {
          toast.error(errorMessage(error));
        },
      }
    );
  };

  const handleDecreaseCartItem = () => {
    mutateDecrease(
      { productId },
      {
        onSuccess: ({ error, message }) => {
          if (error) {
            toast.error(error);
          }
          if (message) {
            toast.success(message);
            refetch();
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
        onClick={handleAddToCart}
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
        <Button
          variant="icon"
          disabled={
            quantity === 0 ||
            stock === 0 ||
            mutateAddLoading ||
            mutateDecreaseLoading
          }
          className="p-2"
          onClick={handleDecreaseCartItem}
        >
          {quantity === 1 ? (
            <SolarTrashBold className="text-rose-500 hover:text-rose-600" />
          ) : (
            <MinusIcon />
          )}
        </Button>
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
        <Button
          variant="icon"
          disabled={
            stock === 0 ||
            quantity >= stock ||
            mutateAddLoading ||
            mutateDecreaseLoading
          }
          className="p-2"
          onClick={handleAddToCart}
        >
          <PlusIcon />
        </Button>
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
