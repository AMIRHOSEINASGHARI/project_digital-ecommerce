import { Skeleton } from "@/components/ui/skeleton";

const ProductCardSkeleton = () => {
  return (
    <div className="h-fit flex flex-col">
      <Skeleton className="h-[250px] w-full rounded-t-xl rounded-b-none" />
      <div className="px-card py-4 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-16" />
        </div>
        <Skeleton className="h-5 w-full" />
        <div className="flex justify-end">
          <Skeleton className="h-5 w-16" />
        </div>
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-8 rounded-full" />
          <div className="flex items-center gap-3">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
