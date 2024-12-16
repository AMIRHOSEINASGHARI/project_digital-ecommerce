const FilterBox = ({
  title,
  buttons,
}: {
  title: string;
  buttons: JSX.Element[];
}) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-medium text-sm text-[var(--text-disabled)]">
        {title}
      </span>
      <ul className="flex flex-col gap-1">{buttons}</ul>
    </div>
  );
};

export default FilterBox;
