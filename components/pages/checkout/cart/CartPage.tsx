// next
import { notFound } from "next/navigation";
// actions
import { getCustomerCart } from "@/actions/query/cart.query.actions";
// cmp
import EmptyCart from "../shared/EmptyCart";
import CartItemsTable from "./ui/CartItemsTable";
import CartSummary from "./shared/CartSummary";

const CartPage = async () => {
  const cart = await getCustomerCart();

  if (!cart) notFound();

  if (cart?.totalItems === 0) return <EmptyCart />;

  return (
    <main className="flex flex-col xl:flex-row gap-8">
      <CartItemsTable items={cart.items} />
      <CartSummary
        totalPrice={cart.totalPrice}
        totalItems={cart.totalItems}
        totalDiscount={cart.totalDiscount}
        totalPayable={cart.totalPayable}
      />
    </main>
  );
};

export default CartPage;
