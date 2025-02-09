// next
import Link from "next/link";
import Image from "next/image";
// constants
import { grayBase64 } from "@/constants";
// lib
import { applyDiscount } from "@/lib/functions";
// types
import { CartSheetItemProps } from "@/types/components";

const CartSheetItem = ({
  quantity,
  discount,
  price,
  productId,
  productImage,
  productTitle,
}: CartSheetItemProps) => {
  return (
    <div>
      <div className="flex gap-3">
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
            className="rounded-xl w-[70px] h-[70px] object-cover"
            blurDataURL={grayBase64}
            placeholder="blur"
          />
        </Link>
        <div className="flex flex-col">
          <Link href={`/products/${productId}`} className="w-fit">
            <span className="line-clamp-1">{productTitle}</span>
          </Link>
          <div>
            <p>
              {discount > 0 && (
                <span className="price-discount mr-2">${price.toFixed(2)}</span>
              )}
              <span className="price">${applyDiscount(price, discount)}</span>
              <span className="font-light"> &#10005; {quantity}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSheetItem;
