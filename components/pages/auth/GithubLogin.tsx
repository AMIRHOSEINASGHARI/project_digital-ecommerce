// cmp
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

const GithubLogin = ({ disabled }: { disabled: boolean }) => {
  return (
    <Button
      variant="outline"
      className="min-w-[250px] md:w-[330px] py-4 px-[14px]"
      disabled={disabled}
    >
      <GithubIcon className="text-xl" />
      Continue with Github
    </Button>
  );
};

export default GithubLogin;
