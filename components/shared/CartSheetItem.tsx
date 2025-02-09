// next
import Link from "next/link";
import Image from "next/image";
// constants
import { grayBase64 } from "@/constants";
// lib
import { applyDiscount } from "@/lib/functions";
// types
import { CartSheetItemProps } from "@/types/components";
import CartDecrease from "./cart/CartDecrease";
import CartAdd from "./cart/CartAdd";

const CartSheetItem = ({
  quantity,
  discount,
  price,
  productId,
  productImage,
  productTitle,
  productStock,
}: CartSheetItemProps) => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <Link
          href={`/products/${productId}`}
          className="w-fit shrink-0 max-sm:hidden"
        >
          <Image
            src={productImage}
            width={100}
            height={100}
            alt={productTitle}
            priority
            className="rounded-xl w-[82px] h-[82px] object-cover"
            blurDataURL={grayBase64}
            placeholder="blur"
          />
        </Link>
        <div className="flex flex-col gap-1">
          <Link href={`/products/${productId}`} className="w-fit">
            <span className="line-clamp-1 text-sm">{productTitle}</span>
          </Link>
          <p>
            {discount > 0 && (
              <span className="price-discount mr-2 text-sm">
                ${price.toFixed(2)}
              </span>
            )}
            <span className="price text-sm">
              ${applyDiscount(price, discount)}
            </span>
            <span className="font-light text-sm"> &#10005; {quantity}</span>
          </p>
          <div className="flex items-center justify-between gap-4 w-fit">
            <CartDecrease
              stock={productStock}
              quantity={quantity}
              productId={productId}
              className="p-1 border border-border-light dark:border-border-dark"
            />
            <span className="w-3">{quantity}</span>
            <CartAdd
              stock={productStock}
              quantity={quantity}
              productId={productId}
              className="p-1 text-primary-1 border border-primary-1 dark:border-primary-5 dark:text-primary-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSheetItem;
