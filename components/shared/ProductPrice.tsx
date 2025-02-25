// lib
import { applyDiscount } from "@/lib/functions";
import { cn } from "@/lib/utils";
// types
import { ProductPriceProps } from "@/types/components";

const ProductPrice = ({
  price,
  discount,
  className,
  discountedClassName,
  mainPriceClassName,
}: ProductPriceProps) => {
  return (
    <p className={cn("w-fit", className)}>
      {discount > 0 && (
        <span className={cn("price-discount mr-2", mainPriceClassName)}>
          ${price.toFixed(2)}
        </span>
      )}
      <span className={cn("price", discountedClassName)}>
        ${applyDiscount(price, discount)}
      </span>
    </p>
  );
};

export default ProductPrice;
