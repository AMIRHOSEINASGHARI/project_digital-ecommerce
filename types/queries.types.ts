// types
import { CheckoutStatus } from "./cart.types";
import { IProduct } from "./product.types";

type FetchCart = {
  totalPrice: number;
  totalDiscount: number;
  totalPayable: number;
  totalItems: number;
  checkoutStatus: CheckoutStatus;
  items: {
    product: IProduct;
    quantity: number;
    price: number;
    discount: number;
  }[];
};

type FetchUserAddress = {
  _id: string;
  fullName: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
};

export type { FetchCart, FetchUserAddress };
