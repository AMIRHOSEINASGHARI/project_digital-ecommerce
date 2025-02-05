// types
import { ICustomer } from "./customer.types";

interface IAddress extends Document {
  customer: ICustomer;
  fullName: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type { IAddress };
