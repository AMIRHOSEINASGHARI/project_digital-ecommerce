"use client";

// next
import Link from "next/link";
// constants
import { images, navbarProfileMenuLinks } from "@/constants";
// auth
import { signOut, useSession } from "next-auth/react";
// cmp
import NavbarLoginButton from "./NavbarLoginButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavbarAuthSection = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Skeleton className="rounded-full size-[25px]" />;
  }

  if (status === "unauthenticated") {
    return <NavbarLoginButton />;
  }

  const dropDownTrigger = (
    <Button asChild variant="icon" className="cursor-pointer">
      <Avatar>
        <AvatarFallback>
          <Skeleton className="rounded-full size-[25px]" />
        </AvatarFallback>
        <AvatarImage src={session?.user?.image || (images.person as string)} />
      </Avatar>
    </Button>
  );

  const dropDownHeader = (
    <Button asChild variant="ghost" className="w-full">
      <Link href="/profile" className="flex items-center gap-3">
        <Avatar size="lg">
          <AvatarFallback>
            <Skeleton className="rounded-full size-[45px]" />
          </AvatarFallback>
          <AvatarImage
            src={session?.user?.image || (images.person as string)}
          />
        </Avatar>
        <div className="flex flex-col overflow-hidden">
          <span className="truncate">{session?.user?.name}</span>
          <p className="truncate">{session?.user?.email}</p>
        </div>
      </Link>
    </Button>
  );

  const dropDownContent = navbarProfileMenuLinks.map(
    ({ href, icon, title }) => {
      if (href) {
        return (
          <DropdownMenuItem key={title} asChild className="p-2">
            <Link href={href} className="flex items-center gap-5 p-2">
              <div className="text-icon-size text-icon-light dark:text-icon-dark">
                {icon}
              </div>
              <span>{title}</span>
            </Link>
          </DropdownMenuItem>
        );
      } else {
        return (
          <DropdownMenuItem key={title} asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-5 w-full justify-start bg-transparent p-2"
              onClick={() => signOut()}
            >
              <div className="text-icon-size text-icon-light dark:text-icon-dark">
                {icon}
              </div>
              <span>{title}</span>
            </Button>
          </DropdownMenuItem>
        );
      }
    }
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{dropDownTrigger}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{dropDownHeader}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="space-y-2">{dropDownContent}</div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarAuthSection;
