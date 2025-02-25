// types
import { IAddress } from "./address.types";

type LogoProps = {
  showText?: boolean;
  svgClassName?: string;
  className?: string;
  textClassName?: string;
};

type NavLinkProps = {
  href: string;
  icon: JSX.Element;
  title: string;
  isMobile?: boolean;
};

type CustomSheetProps = {
  trigger: string | JSX.Element;
  content: string | JSX.Element;
  sheetTitle: string | JSX.Element;
  sheetFooter?: JSX.Element;
  asChildTrigger?: boolean;
  sheetTitleClassName?: string;
  sheetContentClassName?: string;
  wrapperClassName?: string;
  side?: "top" | "bottom" | "left" | "right" | null | undefined;
  closeSheetOnClick?: boolean;
};

type ProductCardProps = {
  _id: string;
  image: string;
  price: number;
  discount: number;
  stock: number;
  brand: string;
  category: string;
  title: string;
};

type CustomTooltipProps = {
  trigger: JSX.Element;
  content: JSX.Element | string;
  side?: "top" | "right" | "bottom" | "left";
};

type FilterButtonProps = {
  title: string;
  value: string;
  icon?: JSX.Element;
  isActive: boolean;
  queryName: string;
  handleSetQuery: (value: string) => void;
  handleDeleteQuery: (value: string) => void;
};

type ServerSideImageProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
  priority?: boolean | undefined;
  className?: string;
  blurType: "locale" | "remote";
};

type CartSheetItemProps = {
  quantity: number;
  discount: number;
  price: number;
  productId: string;
  productImage: string;
  productTitle: string;
  productStock: number;
};

type CartAddProps = {
  stock: number;
  productId: string;
  quantity: number;
  className?: string;
};

type CartDecreaseProps = {
  stock: number;
  productId: string;
  quantity: number;
  className?: string;
};

type ProductPriceProps = {
  price: number;
  discount: number;
  className?: string;
  mainPriceClassName?: string;
  discountedClassName?: string;
};

type PageParams = {
  params: {
    id: string;
  };
};

type CartSummaryProps = {
  totalPrice: number;
  totalItems: number;
  totalDiscount: number;
  totalPayable: number;
};

type AddressFormProps = { type: "create" | "edit"; address?: IAddress };

export type {
  LogoProps,
  NavLinkProps,
  CustomSheetProps,
  ProductCardProps,
  CustomTooltipProps,
  FilterButtonProps,
  ServerSideImageProps,
  CartSheetItemProps,
  CartAddProps,
  CartDecreaseProps,
  ProductPriceProps,
  PageParams,
  CartSummaryProps,
  AddressFormProps,
};
