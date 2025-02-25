// next
import Link from "next/link";
import Image from "next/image";
// constants
import { grayBase64 } from "@/constants";
// lib
import { applyDiscount, jsonParser } from "@/lib/functions";
// types
import { ICartItem } from "@/types";
// cmp
import CartAdd from "@/components/shared/cart/CartAdd";
import CartDecrease from "@/components/shared/cart/CartDecrease";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CartItemsTable = ({ items }: { items: ICartItem[] }) => {
  const tableHeads = [
    "Product",
    "Quantity",
    "Price",
    "Discount",
    "Final value",
    "",
  ];

  const tableRows = items?.map((item) => ({
    key: item?.product?._id,
    product: (
      <Link
        href={`/products/${item?.product?._id}`}
        className="flex items-center gap-5"
      >
        <Image
          src={item?.product?.images[0]}
          alt={item?.product?.title}
          width={100}
          height={100}
          priority
          placeholder="blur"
          blurDataURL={grayBase64}
          className="shrink-0 w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] object-cover rounded-lg"
        />
        <p className="line-clamp-1">{item?.product?.title}</p>
      </Link>
    ),
    quantity: item?.quantity,
    price: "$ " + item?.price,
    discount: "% " + item?.discount,
    finalValue: "$ " + applyDiscount(item?.price, item?.discount),
    actions: (
      <div className="flex items-center gap-3 w-full justify-between">
        <CartDecrease
          productId={jsonParser(item?.product?._id)}
          stock={item?.product?.stock}
          quantity={item?.quantity}
          className="p-1 text-sm"
        />
        <span>{item?.quantity}</span>
        <CartAdd
          productId={jsonParser(item?.product?._id)}
          stock={item?.product?.stock}
          quantity={item?.quantity}
          className="p-1 text-sm"
        />
      </div>
    ),
  }));

  return (
    <section className="w-full xl:w-2/3 tableContainer">
      <Table>
        <TableHeader>
          <TableRow>
            {tableHeads.map((head) => (
              <TableHead key={head}>{head}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableRows.map((item) => (
            <TableRow key={item.key}>
              <TableCell className="min-w-[280px]">{item.product}</TableCell>
              <TableCell className="min-w-[120px]">{item.quantity}</TableCell>
              <TableCell className="min-w-[120px]">{item.price}</TableCell>
              <TableCell className="min-w-[120px]">{item.discount}</TableCell>
              <TableCell className="min-w-[120px]">{item.finalValue}</TableCell>
              <TableCell className="min-w-[120px]">{item.actions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default CartItemsTable;
