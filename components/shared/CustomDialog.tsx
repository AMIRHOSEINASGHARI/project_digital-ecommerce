"use client";

// react
import { useState } from "react";
// types
import { CustomDialogProps } from "@/types";
// lib
import { cn } from "@/lib/utils";
// cmp
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { CrossRegular } from "../svg";

const HiddenTags = () => (
  <VisuallyHidden.Root>
    <DialogHeader>
      <DialogTitle />
      <DialogDescription />
    </DialogHeader>
  </VisuallyHidden.Root>
);

const CustomDialog = ({
  trigger,
  asChildTrigger,
  wrapperClassName = "",
  content,
  closeDialogOnClick,
  dialogTitle = "",
}: CustomDialogProps) => {
  const [open, setOpen] = useState(false);

  const onOpenChange = () => {
    setOpen(!open);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild={asChildTrigger}>{trigger}</DialogTrigger>
      <DialogContent className={cn("p-0 gap-0", wrapperClassName)}>
        <HiddenTags />
        <div className="border-b border-border-light dark:border-border-dark p-6 flex items-center justify-between">
          <div className="font-semibold text-md">{dialogTitle}</div>
          <Button variant="icon" onClick={onClose} className="text-sm">
            <CrossRegular />
          </Button>
        </div>
        <div
          className="p-6 pt-3"
          onClick={closeDialogOnClick ? onClose : undefined}
        >
          {content}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
