// cmp
import { Skeleton } from "../ui/skeleton";

const ProductMainDetailsSkeletons = () => {
  return (
    <div className="flex flex-col gap-8 xl:flex-row">
      <div className="flex flex-col items-center w-full xl:w-1/2">
        <Skeleton className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] xl:h-[400px] rounded-3xl" />
        <div className="flex justify-center w-full space-x-4 p-4">
          {[1, 2, 3, 4].map((el) => (
            <Skeleton key={el} className="w-[70px] h-[70px] rounded-xl" />
          ))}
        </div>
      </div>
      <div className="space-y-4 w-full xl:w-1/2">
        <div className="space-y-1">
          <Skeleton className="w-[280px] md:w-[400px] h-8" />
          <Skeleton className="w-20 h-4" />
        </div>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="space-y-1">
            <Skeleton className="w-28 h-4" />
            <Skeleton className="w-24 h-4" />
          </div>
          <div className="flex items-center gap-3">
            <Skeleton className="w-20 h-5" />
            <Skeleton className="w-20 h-5" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <Skeleton className="w-20 h-5" />
          <Skeleton className="w-32 h-5" />
        </div>
        <div className="flex flex-col gap-1">
          <Skeleton className="w-full h-5" />
          <Skeleton className="w-20 h-5" />
        </div>
        <Skeleton className="w-32 h-5" />
        <div className="flex items-center gap-3">
          <Skeleton className="w-full xl:w-[178px] h-10 rounded-full" />
          <Skeleton className="w-32 h-10 rounded-full" />
        </div>
        <div className="flex gap-1 max-xl:justify-center">
          {[1, 2, 3, 4, 5, 6].map((el) => (
            <Skeleton key={el} className="size-8 rounded-full" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductMainDetailsSkeletons;
