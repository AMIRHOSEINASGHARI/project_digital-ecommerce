"use client";

// hooks
import { useHandleSearchParams } from "@/hooks";
// cmp
import { Button } from "../ui/button";
import { SolarTrashBold } from "../svg";

const DeleteAllPageQueries = ({ filters }: { filters: string[] }) => {
  const { searchParams, replace, pathname } = useHandleSearchParams();

  const params = new URLSearchParams(searchParams);

  if (params.size === 0) return null;

  const deleteAllQueries = () => {
    for (const value of filters) {
      if (params.has(value)) {
        params.delete(value);
      }
    }

    replace(pathname);
  };

  return (
    <Button
      type="button"
      className="gap-2 p-1.5 bg-transparent text-rose-500 dark:text-rose-500 hover:bg-rose-100 dark:bg-transparent dark:hover:bg-rose-800/20"
      onClick={deleteAllQueries}
    >
      <SolarTrashBold className="text-icon-size" />
      <span className="text-small font-bold">Clear</span>
    </Button>
  );
};

export default DeleteAllPageQueries;
