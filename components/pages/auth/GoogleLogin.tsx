// cmp
import { Google } from "@/components/svg";
import { Button } from "@/components/ui/button";

const GoogleLogin = ({ disabled }: { disabled: boolean }) => {
  return (
    <Button
      variant="outline"
      className="min-w-[250px] md:w-[330px] py-4 px-[14px]"
      disabled={disabled}
    >
      <Google className="text-xl" />
      Continue with Google
    </Button>
  );
};

export default GoogleLogin;
