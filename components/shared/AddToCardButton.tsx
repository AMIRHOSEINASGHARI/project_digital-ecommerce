import { SolarCartLarge4BoldDuotone } from "../svg";
import { Button } from "../ui/button";

const AddToCardButton = () => {
  return (
    <Button className="bg-primary-1 dark:bg-primary-5 dark:text-primary-2 text-white rounded-full px-6 xl:px-10 gap-3 max-xl:w-full">
      <SolarCartLarge4BoldDuotone className="text-icon-size" /> Add to Cart
    </Button>
  );
};

export default AddToCardButton;
