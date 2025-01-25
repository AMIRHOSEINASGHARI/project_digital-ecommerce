// next
import Link from "next/link";
// lib
import { applyDiscount } from "@/lib/functions";
// types
import { ProductCardProps } from "@/types/components";
// cmp
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  SolarCartPlusBoldDuotone,
  SolarDocumentsBoldDuotone,
  SolarHeartPulse2BoldDuotone,
} from "../svg";
import CustomTooltip from "./CustomTooltip";
import clsx from "clsx";
import ServerSideImage from "./ServerSideImage";

const ProductCard = ({
  _id,
  brand,
  category,
  discount,
  image,
  price,
  stock,
  title,
}: ProductCardProps) => {
  return (
    <Card style={{ padding: 0 }} className="h-fit">
      <div>
        <div className="rounded-t-xl overflow-hidden w-full h-[250px]">
          <Link href={`/products/${_id}`}>
            <ServerSideImage
              src={image}
              width={500}
              height={500}
              alt={title}
              priority
              blurType="remote"
              className={clsx(
                "w-full h-full object-cover",
                stock === 0 && "saturate-0 opacity-50"
              )}
            />
          </Link>
        </div>
      </div>
      <div className="py-4 px-card space-y-2 overflow-hidden">
        <div className="flex items-center gap-1 flex-wrap">
          {stock < 10 && stock > 0 && (
            <Badge variant="rose" className="capitalize">
              Stocks: {stock}
            </Badge>
          )}
          <Badge className="capitalize" variant="blue">
            {category}
          </Badge>
          <Badge className="capitalize" variant="orange">
            {brand}
          </Badge>
        </div>
        <p className="line-clamp-1 font-semibold">{title}</p>
        <div className="flex items-center justify-between">
          {stock > 0 ? (
            <p className="text-right w-full">
              {discount > 0 && (
                <span className="price-discount mr-2">${price.toFixed(2)}</span>
              )}
              <span className="price">${applyDiscount(price, discount)}</span>
            </p>
          ) : (
            <Badge variant="rose" className="w-full justify-center">
              Out of stock
            </Badge>
          )}
        </div>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <CustomTooltip
            trigger={
              <Button variant="icon" type="button">
                <SolarHeartPulse2BoldDuotone />
              </Button>
            }
            content="Add to your list"
            side="top"
          />
          <div className="flex items-center gap-2">
            <CustomTooltip
              trigger={
                <Button variant="icon" asChild>
                  <Link href={`/products/${_id}`}>
                    <SolarDocumentsBoldDuotone />
                  </Link>
                </Button>
              }
              content="See details"
              side="top"
            />
            <CustomTooltip
              trigger={
                <Button
                  variant="icon"
                  type="button"
                  disabled={stock === 0}
                  className="text-primary-1 dark:text-primary-5"
                >
                  <SolarCartPlusBoldDuotone />
                </Button>
              }
              content={stock === 0 ? "Out of stock" : "Add to cart"}
              side="top"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
