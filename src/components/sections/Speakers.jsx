import { BackgroundGradient } from "../ui/background-gradient";
import linkedInPng from "../../assets/linkedin.png";
import raviPng from "../../assets/ravi.jpg";
import nikunjPng from "../../assets/nikunj.jpeg";

const Speakers = () => {
  return (
    <div className="flex flex-col items-center text-center py-20 px-5  bg-gradient-to-t from-primary to-primary">
      <div className="pb-20">
        <h1 className="text-6xl md:text-7xl font-bold text-black ">Keynote Speakers</h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center pb-20 px-5 gap-10">
        <BackgroundGradient className="rounded-[22px] w-80 p-4 sm:p-10 bg-light">
          <img
            src={raviPng}
            alt="Ravi Annavajjhala, CEO of Kinara, Inc."
            height="400"
            width="400"
            className="object-contain rounded-full"
          />
          <p className="text-base text-center sm:text-xl mt-4 mb-2 text-transparent bg-clip-text bg-gradient-to-tr from-black to-black">
            Ravi Annavajjhala
          </p>

          <p className="text-sm text-center text-black">CEO of Kinara, Inc.</p>
          <p className="text-sm text-center text-black">
            MBA in Finance and Marketing at the Wharton School of the University
            of Pennsylvania
          </p>
        </BackgroundGradient>

        <BackgroundGradient className="rounded-[22px] w-80 h-max p-4 sm:p-10 bg-light">
          <img
            src={nikunjPng}
            alt="Nikunj Mehta, Founder and CEO of Falkonry"
            height="400"
            width="400"
            className="object-contain rounded-full"
          />
          <p className="text-base text-center sm:text-xl mt-4 mb-2 text-transparent bg-clip-text bg-gradient-to-tr from-black to-black">
            Nikunj Mehta
          </p>

          <p className="text-sm text-center text-black">
            Founder and CEO of Falkonry
          </p>
          <p className="text-sm text-center text-black">
            Co-Founder of Industry 4.0 Club
            <br />
            PhD in Computer Science at the University of Southern California
          </p>
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default Speakers;
