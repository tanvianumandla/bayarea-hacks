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


const Team = () => {
  return (
    
    <div className="flex flex-col items-center py-20 px-5  bg-gradient-to-t from-primary to-primary">
      <div className="pb-20">
        <h1 className="text-6xl md:text-7xl font-bold text-black ">Team</h1>
      </div>
      
      <div className="flex gap-5 justify-center flex-col lg:flex-row max-w-5xl w-full flex-wrap">
            
        <CardContainer className="inter-var w-full">
          <CardBody className="bg-gray-950/50 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-black hover:shadow-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-64 h-min flex flex-col items-center">
            <CardItem
              translateZ="50"
              className="text-md font-bold text-black text-center shadow-2xl"
            >
              Aahan Shah
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-black text-sm max-w-sm mt dark:text-black"
            >
              Executive Lead and Director
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-black"
              >
                <img
                  className="rounded-full"
                  src={aahanPng}
                  width="125"
                  height="125"
                  alt="Picture of Aahan Shah, Exective Lead of Milpitas Hacks"
                />
              </CardItem>
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-black flex w-full justify-center"
              >
                <a
                  href="https://www.linkedin.com/in/aahan-shah/"
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
          <CardBody
            className="bg-gray-950/50 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-black hover:shadow-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-64 h-min flex flex-col items-center"
            flex
            flex-col
            items-center
          >
            <CardItem
              translateZ="50"
              className="text-md font-bold text-black text-center"
            >
              Ritvik Rustagi
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-black text-sm max-w-sm mt dark:text-black"
            >
              Executive Lead and Director
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-black"
              >
                <img
                  src={ritvikPng}
                  width="125"
                  className="rounded-full"
                  height="125"
                  alt="Picture of Ritvik Rustagi, Executive Lead at Bay Hacks"
                />
              </CardItem>
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-black w-full flex justify-center"
              >
                <a href="https://www.linkedin.com/in/ritvik-638590210/" target="_blank">
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
          <CardBody
            className="bg-gray-950/50 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-black hover:shadow-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-64 h-min flex flex-col items-center"
            flex
            flex-col
            items-center
          >
            <CardItem
              translateZ="50"
              className="text-md font-bold text-black text-center"
            >
              Nishanth Koushik
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-black text-sm max-w-sm mt dark:text-black"
            >
              Director of Operations
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-black"
              >
                <img
                  src={nishanthPng}
                  width="125"
                  className="rounded-full"
                  height="125"
                  alt="Picture of Ritvik Rustagi, Executive Lead at Bay Hacks"
                />
              </CardItem>
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-black w-full flex justify-center"
              >
                <a href="https://www.linkedin.com/in/nishanth-koushik-327a972a8/" target="_blank">
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
          <CardBody className="bg-gray-950/50 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-black hover:shadow-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-60 h-min flex flex-col items-center">
            <CardItem
              translateZ="50"
              className="text-md font-bold text-black text-center"
            >
              Justin Shen
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-black text-sm max-w-sm mt dark:text-black"
            >
              Director of Operations
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-black"
              >
                <img
                  src={JustinPng}
                  className="rounded-full aspect-square object-cover"
                  width="125"
                  height="125"
                  alt="Picture of Tanvi Anumandla, Frontend Tech Lead of Milpitas Hacks"
                />
              </CardItem>
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-black w-full flex justify-center"
              >
                <a
                  href="https://www.linkedin.com/in/justin-shen-7493221a3"
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
          <CardBody className="bg-gray-950/50 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-black hover:shadow-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-60 h-min flex flex-col items-center">
            <CardItem
              translateZ="50"
              className="text-md font-bold text-black text-center"
            >
              Tanvi Anumandla
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-black text-sm max-w-sm mt dark:text-black"
            >
              Director of Technology
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-black"
              >
                <img
                  src={tanviPng}
                  className="rounded-full aspect-square object-cover"
                  width="125"
                  height="125"
                  alt="Picture of Jeremiah de Guzman, Backend Tech Lead of Milpitas Hacks"
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
          <CardBody
            className="bg-gray-950/50 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-black hover:shadow-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-60 h-min flex flex-col items-center"
            flex
            flex-col
            items-center
          >
            <CardItem
              translateZ="50"
              className="text-md font-bold text-black text-center"
            >
              Pranay Jain
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-black text-sm max-w-sm mt dark:text-black"
            >
              Finance Lead
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-black"
              >
                <img
                  src={pranayPng}
                  width="125"
                  className="rounded-full aspect-square object-cover"
                  height="125"
                  alt="Picture of Devesh Mamidi, Tech at Milpitas Hacks"
                />
              </CardItem>
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-black w-full flex justify-center"
              >
                <a
                  href="https://www.linkedin.com/in/pranay-jain-327a972a8/"
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
          <CardBody className="bg-gray-950/50 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-black hover:shadow-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-60 h-min flex flex-col items-center">
            <CardItem
              translateZ="50"
              className="text-md font-bold text-black text-center"
            >
              
              Aarna Sahu
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-black text-sm max-w-sm mt dark:text-black"
            >
              Sponsors Lead
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-black"
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
                  href="https://www.linkedin.com/in/aarna-sahu-1136671b2/"
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
          <CardBody className="bg-gray-950/50 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-black hover:shadow-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-60 h-min flex flex-col items-center">
            <CardItem
              translateZ="50"
              className="text-md font-bold text-black text-center"
            >
              Poorvi Vijayananda
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-black text-sm max-w-sm mt dark:text-black"
            >
              Marketing Lead
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-black"
              >
                <img
                  src={poorviPng}
                  className="rounded-full w-[125px] h-[125px] object-cover"
                  width="125"
                  height="125"
                  alt="Picture of Jerry Yong, sponsors at Milpitas Hacks"
                />
              </CardItem>
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-black flex w-full justify-center"
              >
                <a
                  href=""
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
          <CardBody className="bg-gray-950/50 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-black hover:shadow-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full lg:w-60 h-min flex flex-col items-center">
            <CardItem
              translateZ="50"
              className="text-md font-bold text-black text-center"
            >
              Devesh Mamidi
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-black text-sm max-w-sm mt dark:text-black"
            >
              Tech
            </CardItem>
            <div className="">
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-black"
              >
                <img
                  src={deveshPng}
                  className="rounded-full w-[125px] h-[125px] object-cover"
                  width="125"
                  height="125"
                  alt="Picture of Jerry Yong, sponsors at Milpitas Hacks"
                />
              </CardItem>
              <CardItem
                translateZ={20}
                className="py-2 rounded-xl text-xs font-normal dark:text-black flex w-full justify-center"
              >
                <a
                  href="https://www.linkedin.com/in/devesh-mamidi-678998231/"
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

export default Team;