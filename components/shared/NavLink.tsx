"use client";

// next
import Link from "next/link";
import { usePathname } from "next/navigation";
// types
import { NavLinkProps } from "@/types/components";
// clsx
import clsx from "clsx";

const NavLink = ({ href, icon, title }: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        "group flex items-center gap-2 py-4 border-y-2 border-t-transparent",
        {
          "border-b-primary-1 text-primary-3 dark:text-primary-5":
            pathname === href,
          "border-b-transparent": pathname !== href,
        }
      )}
    >
      <div
        className={clsx("text-icon-size Transition", {
          "text-primary-3 dark:text-primary-5": pathname === href,
          "text-icon-light dark:text-icon-dark group-hover:text-primary-1":
            pathname !== href,
        })}
      >
        {icon}
      </div>
      <span className="text-sm group-hover:text-primary-1 Transition">
        {title}
      </span>
    </Link>
  );
};

export default NavLink;
