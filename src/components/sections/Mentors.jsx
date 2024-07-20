import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import nishanthPng from "../../assets/nishanth.png";
import jeremiahPng from "../../assets/jeremiah.png";
import pranayPng from "../../assets/pranay.png";
import aahanPng from "../../assets/aahan.png";
import JustinPng from "../../assets/Justin.png";
import oliverPng from "../../assets/oliver.png";
import tanviPng from "../../assets/tanvi.png";
import logoPng from "../../assets/Milpitas Hacks Logo.png";
import linkedInPng from "../../assets/linkedin.png";
import ritvikPng from "../../assets/ritvik.png";
import deveshPng from "../../assets/devesh.png";
import poorviPng from "../../assets/poorvi.png";
import blankPic from "../../assets/blankPic.jpeg";


const Mentors = () => {
  return (
    <div className="flex flex-col items-center py-20 px-5  bg-gradient-to-t from-primary to-primary">
      <div className="pb-20">
        <h1 className="text-6xl md:text-7xl font-bold text-black ">Mentors</h1>
      </div>
      <div className="flex gap-5 justify-center flex-col lg:flex-row max-w-5xl w-full flex-wrap">
        
        <CardContainer className="inter-var w-full">
            <CardBody className="bg-gray-800 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-black hover:shadow-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-60 h-min flex flex-col items-center">

            <CardItem
              translateZ="50"
              className="text-md font-bold text-white text-center"
            >
              Oliver Ma
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-white text-sm max-w-sm mt dark:text-white"
            >
              Mentor
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-black"
              >
                <img
                  src={oliverPng}
                  className="rounded-full aspect-square object-cover"
                  width="125"
                  height="125"
                  alt="Picture of Oliver Ma, Tech Mentor"
                />
              </CardItem>
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-black w-full flex justify-center"
              >
                <a
                  href="https://www.linkedin.com/in/tanvianumandla/"
                  target="_blank"
                >
                  <img
                    src={linkedInPng}
                    className="rounded-sm"
                    width="25"
                    height="25"
                    alt="LinkedIn Logo"
                  />
                </a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var w-full">
            <CardBody className="bg-gray-800 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-black hover:shadow-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-60 h-min flex flex-col items-center">
            <CardItem
              translateZ="50"
              className="text-md font-bold text-white text-center"
            >
              Jeremiah de Guzman
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-white text-sm max-w-sm mt dark:text-white"
            >
              Mentor
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <img
                  src={jeremiahPng}
                  className="rounded-full aspect-square object-cover"
                  width="125"
                  height="125"
                  alt="Picture of Jeremiah de Guzman, Tech Mentor"
                />
              </CardItem>
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white w-full flex justify-center"
              >
                <a
                  href="https://www.linkedin.com/in/justin-shen-7493221a3/"
                  target="_blank"
                >
                  <img
                    src={linkedInPng}
                    className="rounded-sm"
                    width="25"
                    height="25"
                    alt="LinkedIn Logo"
                  />
                </a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var w-full">
            <CardBody className="bg-gray-800 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-black hover:shadow-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-60 h-min flex flex-col items-center">

            <CardItem
              translateZ="50"
              className="text-md font-bold text-white text-center"
            >
              College Student (TBD)
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-white text-sm max-w-sm mt dark:text-white"
            >
              Mentor
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <img
                  src={blankPic}
                  width="125"
                  className="rounded-full aspect-square object-cover"
                  height="125"
                  alt="Picture of Devesh Mamidi, Tech at Milpitas Hacks"
                />
              </CardItem>
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white w-full flex justify-center"
              >
                <a
                  href="https://www.linkedin.com/in/nishanth-koushik-327a972a8/"
                  target="_blank"
                >
                  <img
                    src={linkedInPng}
                    className="rounded-sm"
                    width="25"
                    height="25"
                    alt="LinkedIn Logo"
                  />
                </a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var w-full">
          <CardBody className="bg-gray-800 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-black hover:shadow-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-60 h-min flex flex-col items-center">
            <CardItem
              translateZ="50"
              className="text-md font-bold text-white text-center"
            >
              
              College Student (TBD)
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-white text-sm max-w-sm mt dark:text-white"
            >
              Mentor
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                <img
                  src={blankPic}
                  width="125"
                  height="125"
                  className="rounded-full aspect-square object-cover"
                  alt="Picture of Ved Vyas, sponsors at Milpitas Hacks"
                />
              </CardItem>
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-black flex w-full justify-center"
              >
                <a
                  href="https://www.linkedin.com/in/ved-vyas-4721392ab/"
                  target="_blank"
                >
                  <img
                    src={linkedInPng}
                    className="rounded-sm"
                    width="25"
                    height="25"
                    alt="LinkedIn Logo"
                  />
                </a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        
      </div>
      </div>
  );
};

export default Mentors;
