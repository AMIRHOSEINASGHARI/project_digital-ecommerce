// cmp
import { Button } from "../ui/button";

type FilterButtonProps = {
  title: string;
  value: string;
  icon?: JSX.Element;
};

const FilterButton = ({ title, icon }: FilterButtonProps) => {
  return (
    <li>
      <Button
        type="button"
        variant="action"
        className="w-full justify-start p-1.5"
      >
        {icon && (
          <div className="text-icon-size text-icon-light dark:text-icon-dark">
            {icon}
          </div>
        )}
        <span>{title}</span>
      </Button>
    </li>
  );
};

export default FilterButton;
