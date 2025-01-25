"use client";

// react
import { useState } from "react";
// next
import Image from "next/image";
// cmp
import clsx from "clsx";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const ImagesSection = ({ images }: { images: string[] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col items-center w-full xl:w-1/2 border border-border-light dark:border-border-dark p-4 pb-0">
      <div className="w-full h-[300px] md:h-[500px] xl:h-[400px]">
        <Image
          src={images[selectedIndex]}
          width={500}
          height={500}
          alt="Product Image"
          priority
          className="w-full h-full object-cover xl:object-contain"
        />
      </div>
      <ScrollArea className="w-full">
        <div className="flex justify-center w-full space-x-4 pt-5 pb-4">
          {images.map((image, index) => (
            <div
              key={image}
              onClick={() => setSelectedIndex(index)}
              className={clsx(
                "cursor-pointer touch-none shrink-0 w-[70px] h-[70px] rounded-xl overflow-hidden ring ring-offset-white dark:ring-offset-dark3 ring-offset-4",
                selectedIndex === index && "ring-primary-1 dark:ring-primary-5",
                selectedIndex !== index &&
                  "ring-transparent dark:ring-transparent "
              )}
            >
              <Image
                src={image}
                width={100}
                height={100}
                alt="Product Image"
                priority
                className="w-full h-full object-cover touch-none"
              />
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default ImagesSection;
