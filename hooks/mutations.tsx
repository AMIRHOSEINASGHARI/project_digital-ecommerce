"use client";

// react query
import { useMutation } from "@tanstack/react-query";
// types
import { UseCreateAddressProps } from "@/types";

const useCreateAddress = ({ mutationFn }: UseCreateAddressProps) => {
  const { isLoading, mutate } = useMutation({ mutationFn });

  return { isLoading, mutate };
};

export { useCreateAddress };
