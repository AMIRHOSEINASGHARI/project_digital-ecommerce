"use client";

// react
import { useState } from "react";
// next
import Image from "next/image";
// cmp
import clsx from "clsx";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { grayBase64 } from "@/constants";

const ImagesSection = ({ images }: { images: string[] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col items-center w-full xl:w-1/2">
      <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] xl:h-[400px] rounded-3xl overflow-hidden">
        <Image
          src={images[selectedIndex]}
          width={500}
          height={500}
          alt="Product Image"
          priority
          className="w-full h-full object-cover"
          blurDataURL={grayBase64}
          placeholder="blur"
        />
      </div>
      <ScrollArea className="w-full">
        <div className="flex justify-center w-full space-x-4 p-4">
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
                blurDataURL={grayBase64}
                placeholder="blur"
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
