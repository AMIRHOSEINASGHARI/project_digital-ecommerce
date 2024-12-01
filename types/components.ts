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
};

type CustomSheetProps = {
  trigger: string | JSX.Element;
  content: string | JSX.Element;
  sheetTitle: string | JSX.Element;
  asChildTrigger?: boolean;
  sheetTitleClassName?: string;
  side?: "top" | "bottom" | "left" | "right" | null | undefined;
  closeSheet?: boolean;
};

export type { LogoProps, NavLinkProps, CustomSheetProps };
