"use client";

// auth
import { signIn } from "next-auth/react";
// cmp
import { GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const GithubLogin = ({
  disabled,
  backUrl,
}: {
  disabled: boolean;
  backUrl?: string | null;
}) => {
  return (
    <Button
      variant="outline"
      className="w-[300px] md:w-[330px] py-4 px-[14px]"
      disabled={disabled}
      onClick={() => signIn("github", { callbackUrl: backUrl ?? "/profile" })}
    >
      <GithubIcon className="text-xl" />
      Continue with Github
    </Button>
  );
};

export default GithubLogin;
