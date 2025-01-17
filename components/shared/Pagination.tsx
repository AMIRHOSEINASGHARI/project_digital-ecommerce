"use client";

// hooks
import { useHandleSearchParams } from "@/hooks";
// cmp
import {
  SolarAltArrowLeftLineDuotone,
  SolarAltArrowRightLineDuotone,
} from "@/components/svg";
import { Button } from "@/components/ui/button";

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const { searchParams, handleSetQuery } = useHandleSearchParams("page");

  const currentPage = Number(searchParams.get("page")) || 1;

  const setPrevPage = () => {
    if (currentPage === 1) return;

    handleSetQuery(String(currentPage - 1));
  };
  const setNextPage = () => {
    if (currentPage === totalPages) return;

    handleSetQuery(String(currentPage + 1));
  };

  const numbers: number[] = [];

  for (let number = 1; number <= totalPages; number++) {
    numbers.push(number);
  }

  return (
    <div className="flex items-center justify-center gap-4">
      <Button
        variant="icon"
        className="text-white"
        disabled={currentPage === 1}
        onClick={setPrevPage}
      >
        <SolarAltArrowLeftLineDuotone />
      </Button>
      <span dir="ltr">
        {currentPage} / {totalPages}
      </span>
      <Button
        variant="icon"
        className="text-white"
        disabled={currentPage === totalPages}
        onClick={setNextPage}
      >
        <SolarAltArrowRightLineDuotone />
      </Button>
    </div>
  );
};

export default Pagination;
