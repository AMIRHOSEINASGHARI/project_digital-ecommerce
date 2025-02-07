"use client";

// react
import { useState } from "react";
// icons
import { MinusIcon, PlusIcon } from "lucide-react";
import { SolarTrashBold } from "../svg";
// cmp
import { Button } from "../ui/button";
import clsx from "clsx";

const ChangeProductStock = ({
  stock,
  quantity,
}: {
  stock: number;
  _id: string;
  quantity: number;
}) => {
  const [count, setCount] = useState(quantity);

  const reduceCount = () => {
    if (count === 0) return;
    setCount((prev) => prev - 1);
  };
  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

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
        onClick={reduceCount}
        disabled={count === 0 || stock === 0}
        className="p-2"
      >
        {count === 1 ? (
          <SolarTrashBold className="text-rose-500 hover:text-rose-600" />
        ) : (
          <MinusIcon />
        )}
      </Button>
      <div
        className={clsx(
          "min-w-[62px] flex justify-center",
          count === 0 && "text-sm",
          count > 0 && "font-semibold"
        )}
      >
        <span>
          {stock > 0 ? (count === 0 ? "QTY" : count) : "Out of stock"}
        </span>
        {stock === count && stock > 0 && <span>/ Max</span>}
      </div>
      <Button
        variant="icon"
        onClick={increaseCount}
        disabled={stock === 0 || count >= stock}
        className="p-2"
      >
        <PlusIcon />
      </Button>
    </div>
  );
};

export default ChangeProductStock;
