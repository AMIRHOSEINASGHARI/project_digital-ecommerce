import { cn } from "@/lib/utils";

const NumberBadge = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  if (value === 0 || !value) return;

  return (
    <span
      className={cn(
        "absolute bottom-0 -right-1 rounded outline outline-white dark:outline-dark3 outline-[2px] py-.5 px-1 w-fit h-[18px] flex items-center justify-center bg-orange-600 text-white text-xs",
        className
      )}
    >
      {value}
    </span>
  );
};

export default NumberBadge;
