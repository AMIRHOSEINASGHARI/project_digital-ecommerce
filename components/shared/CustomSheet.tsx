"use client";

// react
import { useState } from "react";
// types
import { CustomSheetProps } from "@/types/components";
// lib
import { cn } from "@/lib/utils";
// cmp
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { CrossRegular } from "../svg";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

const HiddenTags = () => (
  <VisuallyHidden.Root>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription></SheetDescription>
    </SheetHeader>
  </VisuallyHidden.Root>
);

const CustomSheet = ({
  trigger,
  content,
  sheetTitle,
  asChildTrigger = false,
  sheetTitleClassName = "",
  side = "right",
}: // closeSheet = false
CustomSheetProps) => {
  const [open, setOpen] = useState(false);

  const onOpenChange = () => {
    setOpen(!open);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild={asChildTrigger}>{trigger}</SheetTrigger>
      <SheetContent className="p-0" side={side}>
        <HiddenTags />
        <div className="relative w-full h-full">
          <SheetHeader className="px-4 py-3 absolute z-10 top-0 left-0 w-full bg-white dark:bg-dark2 border-b border-color-main">
            <SheetTitle className="flex justify-between items-center">
              <div className={cn("font-bold text-lg", sheetTitleClassName)}>
                {sheetTitle}
              </div>
              <Button
                variant="icon"
                type="button"
                className="text-md"
                onClick={onClose}
              >
                <CrossRegular />
              </Button>
            </SheetTitle>
            <HiddenTags />
          </SheetHeader>
          <div className="w-full h-full flex flex-col overflow-auto hideScrollBar pt-[75px] pb-3 px-4">
            {content}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CustomSheet;
