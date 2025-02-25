import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex py-4 px-[14px] w-full rounded-xl border border-slate-200 bg-white dark:bg-transparent dark:text-light3 text-sm ring-offset-white placeholder:text-slate-600 focus-visible:outline-none focus-visible:border-primary-1 dark:focus-visible:border-primary-5 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 placeholder:text-[13px] dark:focus-visible:ring-slate-300",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
