// next
import Link from "next/link";
// lib
import { cn } from "@/lib/utils";
// types
import { LogoProps } from "@/types/components";
// icons
import { LogoRegular } from "../svg";

const Logo = ({
  showText = false,
  svgClassName = "",
  className = "",
}: LogoProps) => {
  return (
    <Link href="/" className={cn("flex items-center gap-3 w-fit", className)}>
      <LogoRegular className={cn("text-primary-1 text-[45px]", svgClassName)} />
      {showText && (
        <p className="italic font-bold text-lg">
          <span className="text-primary-1">Online</span>Shop
        </p>
      )}
    </Link>
  );
};

export default Logo;
