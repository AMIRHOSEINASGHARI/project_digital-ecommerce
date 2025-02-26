"use client";

// next
import Link from "next/link";
import { usePathname } from "next/navigation";
// auth
import { signOut } from "next-auth/react";
// constants
import { usersPage_accountLinks, usersPage_dashboardLinks } from "@/constants";
// cmp
import { SolarPowerBoldDuotone } from "@/components/svg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import clsx from "clsx";

const UserPagesSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-1/4 max-xl:hidden">
      <Card className="space-y-9">
        <div className="space-y-2">
          <span className="text-[var(--text-disabled)] text-xs font-light">
            DASHBOARD
          </span>
          {usersPage_dashboardLinks.map((link) => (
            <SidebarLink
              key={link.href}
              href={link.href}
              icon={link.icon}
              pathname={pathname}
              title={link.title}
            />
          ))}
        </div>
        <div className="space-y-2">
          <span className="text-[var(--text-disabled)] text-xs font-light">
            ACCOUNT SETTINGS
          </span>
          {usersPage_accountLinks.map((link) => (
            <SidebarLink
              key={link.href}
              href={link.href}
              icon={link.icon}
              pathname={pathname}
              title={link.title}
            />
          ))}
          <Button
            variant="action"
            className="flex items-center gap-3 py-1 px-0 w-full hover:bg-transparent dark:hover:bg-transparent text-rose-500 dark:text-rose-400 justify-start"
            onClick={() => signOut()}
          >
            <div className="text-2xl">
              <SolarPowerBoldDuotone />
            </div>
            <p className="font-normal">Log out</p>
          </Button>
        </div>
      </Card>
    </aside>
  );
};

export default UserPagesSidebar;

type SidebarLinkProps = {
  href: string;
  pathname: string;
  icon: JSX.Element;
  title: string;
};

const SidebarLink = ({ href, pathname, icon, title }: SidebarLinkProps) => {
  return (
    <Link
      key={href}
      href={href}
      className={clsx(
        "flex items-center gap-3 py-1 relative",
        pathname === href && "text-primary-1 dark:text-primary-5",
        pathname !== href && "text-icon-light dark:text-icon-dark"
      )}
    >
      {pathname === href && (
        <div className="bg-primary-1 dark:bg-primary-5 w-1 h-6 rounded absolute -left-6" />
      )}
      <div className="text-2xl">{icon}</div>
      <p className="font-normal">{title}</p>
    </Link>
  );
};
