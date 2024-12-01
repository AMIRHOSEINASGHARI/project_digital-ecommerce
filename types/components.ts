type LogoProps = {
  showText?: boolean;
  svgClassName?: string;
  className?: string;
};

type NavLinkProps = {
  href: string;
  icon: JSX.Element;
  title: string;
};

export type { LogoProps, NavLinkProps };
