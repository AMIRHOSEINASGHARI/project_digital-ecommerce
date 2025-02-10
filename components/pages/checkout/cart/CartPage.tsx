// next
import { notFound } from "next/navigation";
// actions
import { getCustomerCart } from "@/actions/query/cart.query.actions";
// cmp
import EmptyCart from "../shared/EmptyCart";

const CartPage = async () => {
  const cart = await getCustomerCart();

  if (!cart) notFound();

  if (cart?.totalItems === 0) return <EmptyCart />;

  return (
    <>
      <section>CartPage</section>
    </>
  );
};

export default CartPage;
