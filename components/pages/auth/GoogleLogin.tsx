"use client";

// auth
import { signIn } from "next-auth/react";
// cmp
import { Google } from "@/components/svg";
import { Button } from "@/components/ui/button";

const GoogleLogin = ({
  disabled,
  backUrl,
}: {
  disabled: boolean;
  backUrl: string | null;
}) => {
  return (
    <Button
      variant="outline"
      className="min-w-[250px] md:w-[330px] py-4 px-[14px]"
      disabled={disabled}
      onClick={() => signIn("google", { callbackUrl: backUrl ?? "/profile" })}
    >
      <Google className="text-xl" />
      Continue with Google
    </Button>
  );
};

export default GoogleLogin;
