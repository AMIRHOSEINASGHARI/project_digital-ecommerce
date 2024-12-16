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

export type {
  LogoProps,
  NavLinkProps,
  CustomSheetProps,
  ProductCardProps,
  CustomTooltipProps,
  FilterButtonProps,
};
