"use client";

// actions
import { decreaseCartItem } from "@/actions/mutation/cart.actions";
// lib
import { errorMessage } from "@/lib/functions";
import { cn } from "@/lib/utils";
// react query
import { useMutation, useQueryClient } from "@tanstack/react-query";
// types
import { CartDecreaseProps } from "@/types/components";
// cmp
import { Button } from "@/components/ui/button";
import { MinusIcon } from "lucide-react";
import toast from "react-hot-toast";

const CartDecrease = ({
  stock,
  productId,
  quantity,
  className,
}: CartDecreaseProps) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: decreaseCartItem,
  });

  const handleDecreaseCartItem = () => {
    const values = { productId };
    mutate(values, {
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
    });
  };

  return (
    <Button
      variant="icon"
      disabled={quantity === 0 || stock === 0 || isLoading}
      className={cn("p-2", className)}
      onClick={handleDecreaseCartItem}
    >
      <MinusIcon />
    </Button>
  );
};

export default CartDecrease;
