import { HoverEffect } from "../ui/HoverEffect";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const Judges = () => {
  return (
    <div className="flex flex-col items-center text-center pt-20 pb-40 px-5  bg-gradient-to-t from-primary to-primary">
      <div className="pb-20">
        <h1 className="text-6xl md:text-7xl font-bold text-black ">Guest Judges</h1>
      </div>

      <HoverEffect />
    </div>
  );
};

export default Judges;
