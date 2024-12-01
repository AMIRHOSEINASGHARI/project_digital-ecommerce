// next
import Link from "next/link";
// types
import { LogoProps } from "@/types/components";
// icons
import { LogoRegular } from "../svg";

const Logo = ({ showText = false, svgClassName = "" }: LogoProps) => {
  return (
    <Link href="/" className="flex items-center gap-3">
      <LogoRegular className={svgClassName} />
      {showText && (
        <p className="italic font-semibold">
          <span className="text-primary-1">Online</span>Shop
        </p>
      )}
    </Link>
  );
};

export default Logo;
