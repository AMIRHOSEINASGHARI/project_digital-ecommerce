// cmp
import { Card } from "@/components/ui/card";
// types
import { CartSummaryProps } from "@/types";

const CartSummary = ({
  totalPrice,
  totalItems,
  totalDiscount,
  totalPayable,
}: CartSummaryProps) => {
  const list = [
    {
      id: "total-items",
      title: "Total items:",
      value: totalItems,
    },
    {
      id: "total-price",
      title: "Total price:",
      value: "$ " + totalPrice.toFixed(2),
    },
    {
      id: "total-discount",
      title: "Total discount:",
      value: "$ " + totalDiscount.toFixed(2),
    },
    {
      id: "payable",
      title: "Payable:",
      value: "$ " + totalPayable.toFixed(2),
    },
  ];
  return (
    <section className="w-full xl:w-1/3">
      <Card className="space-y-5">
        {list.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <p>{item.title}</p>
            <span>{item.value}</span>
          </div>
        ))}
      </Card>
    </section>
  );
};

export default CartSummary;
