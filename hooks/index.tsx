"use client";

// react
import { Dispatch, SetStateAction, useEffect } from "react";
// next
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export const useHandleSearchParams = (
  name?: string,
  setValue?: Dispatch<SetStateAction<string>>
) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push, replace } = useRouter();

  const handleSetQuery = (value: string) => {
    if (!!name?.trim()) {
      const params = new URLSearchParams(searchParams);

      if (searchParams?.get("page")) params.delete("page");

      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }

      const newRoute = `${pathname}?${params.toString()}`;
      push(newRoute);
    } else {
      return;
    }
  };

  const handleDeleteQuery = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (params?.has(value)) {
      params.delete(value);
    }

    let newRoute = `${pathname}?${params.toString()}`;

    if (params.size === 0) {
      newRoute = pathname;
    }

    replace(newRoute);
  };

  useEffect(() => {
    if (!name?.trim() || !setValue) return;

    const params = new URLSearchParams(searchParams);
    setValue(params.get(name) || "");
  }, [name, setValue, searchParams]);

  return {
    handleSetQuery,
    handleDeleteQuery,
    replace,
    push,
    pathname,
    searchParams,
  };
};
