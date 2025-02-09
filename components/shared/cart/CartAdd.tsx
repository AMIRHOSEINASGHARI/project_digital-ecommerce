"use client";

// actions
import { addToCart } from "@/actions/mutation/cart.actions";
// react query
import { useMutation, useQueryClient } from "@tanstack/react-query";
// lib
import { errorMessage } from "@/lib/functions";
// types
import { CartAddProps } from "@/types/components";
// cmp
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import toast from "react-hot-toast";

const CartAdd = ({ stock, productId, quantity }: CartAddProps) => {
  const queryClient = useQueryClient();
  const { mutate: mutateAdd, isLoading: mutateAddLoading } = useMutation({
    mutationFn: addToCart,
  });

  const handleAddToCart = () => {
    const values = { productId, currentQuantity: quantity };

    mutateAdd(values, {
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
      disabled={stock === 0 || quantity >= stock || mutateAddLoading}
      className="p-2"
      onClick={handleAddToCart}
    >
      <PlusIcon />
    </Button>
  );
};

export default CartAdd;
