// next
import Link from "next/link";
// lib
import { getServerSession } from "@/lib/session";
// cmp
import { SolarUserRoundedBoldDuotone } from "../svg";
import { Button } from "../ui/button";

const NavbarAuthSection = () => {
  const session = getServerSession();

  return (
    <Button asChild variant="icon">
      <Link href={session ? "/user/profile" : "/login"}>
        <SolarUserRoundedBoldDuotone />
      </Link>
    </Button>
  );
};

export default NavbarAuthSection;
