// next
import Image from "next/image";
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
    <Card style={{ padding: 0 }}>
      <div className="p-3">
        <div className="rounded-xl overflow-hidden w-full h-[200px]">
          <Image
            src={image}
            width={500}
            height={500}
            alt={title}
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="px-card pb-card space-y-2 overflow-hidden">
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="green" className="capitalize">
            {category}
          </Badge>
          <Badge variant="orange" className="capitalize">
            {brand}
          </Badge>
        </div>
        <p className="line-clamp-1 font-semibold">{title}</p>
        {stock > 0 ? (
          <p>
            <span className="price">${applyDiscount(price, discount)}</span>
            {discount > 0 && (
              <span className="price-discount ml-2">${price.toFixed(2)}</span>
            )}
          </p>
        ) : (
          <Badge variant="rose">Out of stock</Badge>
        )}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <Button variant="icon" type="button">
            <SolarHeartPulse2BoldDuotone />
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="icon" asChild>
              <Link href={`/products/${_id}`}>
                <SolarDocumentsBoldDuotone />
              </Link>
            </Button>
            <Button variant="icon" type="button" disabled={stock === 0}>
              <SolarCartPlusBoldDuotone />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
