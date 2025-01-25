"use client";

// next
import { usePathname } from "next/navigation";
// lib
import { BASE_URL } from "@/lib/vars";
// icons
import { SolarCopyBoldDuotone } from "@/components/svg";
// cmp
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const CopyClipboard = () => {
  const pathname = usePathname();
  const url = `${BASE_URL}${pathname}`;

  const copyHandler = () => {
    navigator.clipboard.writeText(url);
    toast.success("Copied!");
  };

  return (
    <Button variant="icon" onClick={copyHandler}>
      <SolarCopyBoldDuotone />
    </Button>
  );
};

export default CopyClipboard;
