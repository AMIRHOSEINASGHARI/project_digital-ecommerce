// cmp
import { SolarHeartPulse2BoldDuotone } from "../svg";
import { Button } from "../ui/button";

const AddWhishList = ({}: { _id: string }) => {
  return (
    <Button variant="outline" className="rounded-full px-4">
      <SolarHeartPulse2BoldDuotone className="text-icon-size text-icon-light dark:text-icon-dark" />{" "}
      <span className="text-sm">Whish list</span>
    </Button>
  );
};

export default AddWhishList;
