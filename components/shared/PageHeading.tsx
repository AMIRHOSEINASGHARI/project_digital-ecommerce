// types
import { PageHeadingProps } from "@/types";

const PageHeading = ({ icon, title, subTitle }: PageHeadingProps) => {
  return (
    <div className="flex items-center gap-5 xl:mb-8 mb-3">
      {icon && (
        <div className="bg-light2 dark:bg-dark3 text-primary-1 dark:text-primary-5 p-2 text-2xl rounded-xl">
          {icon}
        </div>
      )}
      <div className="flex flex-col">
        <h5>{title}</h5>
        {subTitle && <p className="-mt-1 text-xs text-disabled">{subTitle}</p>}
      </div>
    </div>
  );
};

export default PageHeading;
