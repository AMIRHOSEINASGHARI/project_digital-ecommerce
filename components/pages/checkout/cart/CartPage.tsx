// next
import { notFound } from "next/navigation";
// actions
import { getCustomerCart } from "@/actions/query/cart.query.actions";
// cmp
import EmptyCart from "../shared/EmptyCart";
import CartItemsTable from "./ui/CartItemsTable";

const CartPage = async () => {
  const cart = await getCustomerCart();

  if (!cart) notFound();

  if (cart?.totalItems === 0) return <EmptyCart />;

  return (
    <>
      <CartItemsTable items={cart.items} />
    </>
  );
};

export default CartPage;
