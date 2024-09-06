import { BackgroundGradient } from "../ui/background-gradient";
import linkedInPng from "../../assets/linkedin.png";
import blankPic from "../../assets/blankPic.jpeg";
import LPic from "/Users/tanvi/Downloads/work/src/assets/Screenshot 2024-09-03 at 11.05.58 PM.png";

const Speakers = () => {
  return (
    <div className="flex flex-col items-center text-center py-20 px-5  bg-gradient-to-t from-primary to-primary">
      <div className="pb-20">
        <h1 className="text-6xl md:text-7xl font-bold text-black ">Keynote Speakers</h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center pb-20 px-5 gap-10">
        <BackgroundGradient className="rounded-[22px] w-80 p-4 sm:p-10 bg-light">
          <img
            src={LPic}
            alt="Leilani H. Gilpin"
            height="400"
            width="400"
            className="object-contain rounded-full"
          />
          <p className="text-base text-center sm:text-xl mt-4 mb-2 text-transparent bg-clip-text bg-gradient-to-tr from-black to-black">
          Leilani H. Gilpin
          </p>

      
          <p className="text-sm text-center text-black">
          Leilani H. Gilpin is an Assistant Professor at UC Santa Cruz specializing in the analysis of autonomous systems, with her research applied to decision-making, system debugging, and accountability.            <br />
          
          </p>
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default Speakers;
