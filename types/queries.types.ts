// types
import { CheckoutStatus } from "./cart.types";
import { IProduct } from "./product.types";

type FetchCart = {
  totalPrice: number;
  totalDiscount: number;
  totalPayable: number;
  checkoutStatus: CheckoutStatus;
  items: {
    product: IProduct;
    quantity: number;
    price: number;
    discount: number;
  }[];
};

export type { FetchCart };
