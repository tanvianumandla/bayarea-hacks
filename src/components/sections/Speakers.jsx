import { BackgroundGradient } from "../ui/background-gradient";
import linkedInPng from "../../assets/linkedin.png";
import blankPic from "../../assets/blankPic.jpeg";

const Speakers = () => {
  return (
    <div className="flex flex-col items-center text-center py-20 px-5  bg-gradient-to-t from-primary to-primary">
      <div className="pb-20">
        <h1 className="text-6xl md:text-7xl font-bold text-black ">Keynote Speakers</h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center pb-20 px-5 gap-10">
        <BackgroundGradient className="rounded-[22px] w-80 p-4 sm:p-10 bg-light">
          <img
            src={blankPic}
            alt="TBD"
            height="400"
            width="400"
            className="object-contain rounded-full"
          />
          <p className="text-base text-center sm:text-xl mt-4 mb-2 text-transparent bg-clip-text bg-gradient-to-tr from-black to-black">
            TBD
          </p>

          <p className="text-sm text-center text-black">N/A</p>
          <p className="text-sm text-center text-black">
            N/A
          </p>
        </BackgroundGradient>

        <BackgroundGradient className="rounded-[22px] w-80 h-max p-4 sm:p-10 bg-light">
          <img
            src={nikunjPng}
            alt="TBD"
            height="400"
            width="400"
            className="object-contain rounded-full"
          />
          <p className="text-base text-center sm:text-xl mt-4 mb-2 text-transparent bg-clip-text bg-gradient-to-tr from-black to-black">
            TBD
          </p>

          <p className="text-sm text-center text-black">
            N/A
          </p>
          <p className="text-sm text-center text-black">
            N/A
            <br />
            N/A
          </p>
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default Speakers;
