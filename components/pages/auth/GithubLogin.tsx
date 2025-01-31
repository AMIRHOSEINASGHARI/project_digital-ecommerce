// cmp
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";

const GithubLogin = () => {
  return (
    <Button
      variant="outline"
      className="min-w-[250px] md:w-[330px] py-4 px-[14px]"
    >
      <GithubIcon className="text-xl" />
      Continue with Github
    </Button>
  );
};

export default GithubLogin;
