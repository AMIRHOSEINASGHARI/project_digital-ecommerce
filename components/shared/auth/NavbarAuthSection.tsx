// auth
import authOptions from "@/lib/auth";
import { getServerSession } from "next-auth";
// cmp
import NavbarLoginButton from "./NavbarLoginButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

const NavbarAuthSection = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <NavbarLoginButton />;
  }

  return (
    <Button asChild variant="icon">
      <Avatar>
        <AvatarFallback>
          <Skeleton className="rounded-full size-[25px]" />
        </AvatarFallback>
        <AvatarImage src={session?.user?.image as string} />
      </Avatar>
    </Button>
  );
};

export default NavbarAuthSection;
