import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import nishanthPng from "../../assets/nishanth.png";
import ritvikPng from "../../assets/ritvik.png"
import pranayPng from "../../assets/pranay.png";
import aahanPng from "../../assets/aahan.png";
import JustinPng from "../../assets/Justin.png";
import tanviPng from "../../assets/tanvi.png";
import linkedInPng from "../../assets/linkedin.png";
import deveshPng from "../../assets/devesh.png";
import poorviPng from "../../assets/poorvi.png";
import aaravPng from "../../assets/aarav.png";
import aarnaPng from "../../assets/aarna.png"; 

const Team = () => {
  return (
    <div className="flex flex-col items-center py-20 px-5 bg-gradient-to-t from-primary to-primary">
      <div className="pb-20">
        <h1 className="text-6xl md:text-7xl font-bold text-black">Team</h1>
      </div>

      {/* First Row */}
      <div className="flex flex-wrap justify-center gap-4 max-w-5xl w-full mb-10">
        <CardContainer className="w-full lg:w-64">
          <CardBody className="bg-gray-950/50 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-black hover:shadow-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full h-min flex flex-col items-center">
            <CardItem translateZ="50" className="text-md font-bold text-black text-center">
              Aahan Shah
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-black text-sm max-w-sm mt dark:text-black">
              Executive Lead and Director
            </CardItem>
            <div className="mt-4 flex flex-col items-center">
              <CardItem translateZ={20} className="py-2 rounded-xl text-xs font-normal dark:text-black">
                <img
                  className="rounded-full"
                  src={aahanPng}
                  width="125"
                  height="125"
                  alt="Aahan Shah"
                />
              </CardItem>
              <CardItem translateZ={20} className="py-2 rounded-xl text-xs font-normal dark:text-black flex justify-center">
                <a href="https://www.linkedin.com/in/aahan-shah/" target="_blank">
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

        <CardContainer className="w-full lg:w-64">
          <CardBody className="bg-gray-950/50 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-black hover:shadow-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full h-min flex flex-col items-center">
            <CardItem translateZ="50" className="text-md font-bold text-black text-center">
              Ritvik Rustagi
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-black text-sm max-w-sm mt dark:text-black">
              Executive Lead and Director
            </CardItem>
            <div className="mt-4 flex flex-col items-center">
              <CardItem translateZ={20} className="py-2 rounded-xl text-xs font-normal dark:text-black">
                <img
                  src={ritvikPng}
                  width="125"
                  height="125"
                  className="rounded-full"
                  alt="Ritvik Rustagi"
                />
              </CardItem>
              <CardItem translateZ={20} className="py-2 rounded-xl text-xs font-normal dark:text-black flex justify-center">
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
      </div>

      {/* Second Row */}
      <div className="flex flex-wrap justify-center gap-4 max-w-5xl w-full mb-10">
        <CardContainer className="w-full lg:w-56 lg:h-68">
          <CardBody className="bg-gray-950/50 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-black hover:shadow-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full h-full flex flex-col items-center">
            <CardItem translateZ="50" className="text-md font-bold text-black text-center">
              Nishanth Koushik
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-black text-sm max-w-sm mt dark:text-black">
              Director of Operations
            </CardItem>
            <div className="mt-4 flex flex-col items-center">
              <CardItem translateZ={20} className="py-2 rounded-xl text-xs font-normal dark:text-black">
                <img
                  src={nishanthPng}
                  width="125"
                  height="125"
                  className="rounded-full"
                  alt="Nishanth Koushik"
                />
              </CardItem>
              <CardItem translateZ={20} className="py-2 rounded-xl text-xs font-normal dark:text-black flex justify-center">
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

        <CardContainer className="w-full lg:w-56 lg:h-72">
          <CardBody className="bg-gray-950/50 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-black hover:shadow-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full h-full flex flex-col items-center">
            <CardItem translateZ="50" className="text-md font-bold text-black text-center">
              Justin Shen
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-black text-sm max-w-sm mt dark:text-black">
              Director of Operations
            </CardItem>
            <div className="mt-4 flex flex-col items-center">
              <CardItem translateZ={20} className="py-2 rounded-xl text-xs font-normal dark:text-black">
                <img
                  src={JustinPng}
                  className="rounded-full"
                  alt="Justin Shen"
                  style={{ width: '125px', height: '125px', objectFit: 'cover' }}
                />
              </CardItem>
              <CardItem translateZ={20} className="py-2 rounded-xl text-xs font-normal dark:text-black flex justify-center">
                <a href="https://www.linkedin.com/in/justin-shen-7493221a3" target="_blank">
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

        <CardContainer className="w-full lg:w-56 lg:h-68">
          <CardBody className="bg-gray-950/50 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-black hover:shadow-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full h-full flex flex-col items-center">
            <CardItem translateZ="50" className="text-md font-bold text-black text-center">
              Tanvi Anumandla
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-black text-sm max-w-sm mt dark:text-black">
              Tech Lead
            </CardItem>
            <div className="mt-4 flex flex-col items-center">
              <CardItem translateZ={20} className="py-2 rounded-xl text-xs font-normal dark:text-black">
                <img
                  src={tanviPng}
                  width="125"
                  className="rounded-full"
                  height="125"
                  alt="Tanvi Anumandla"
                />
              </CardItem>
              <CardItem translateZ={20} className="py-2 rounded-xl text-xs font-normal dark:text-black flex justify-center">
                <a href="https://www.linkedin.com/in/tanvi-anumandla-5397a0212/" target="_blank">
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

      {/* Third Row */}
      <div className="flex flex-wrap justify-center gap-4 max-w-5xl w-full mb-10">
        <CardContainer className="w-full lg:w-56 lg:h-72">
          <CardBody className="bg-gray-950/50 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-black hover:shadow-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full h-full flex flex-col items-center">
            <CardItem translateZ="50" className="text-md font-bold text-black text-center">
              Devesh Mamidi
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-black text-sm max-w-sm mt dark:text-black">
              Tech
            </CardItem>
            <div className="mt-4 flex flex-col items-center">
              <CardItem translateZ={20} className="py-2 rounded-xl text-xs font-normal dark:text-black">
                <img
                  src={deveshPng}
                  width="125"
                  height="125"
                  className="rounded-full"
                  alt="Devesh Mamidi"
                />
              </CardItem>
              <CardItem translateZ={20} className="py-2 rounded-xl text-xs font-normal dark:text-black flex justify-center">
                <a href="https://www.linkedin.com/in/devesh-mamidi/" target="_blank">
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

        <CardContainer className="w-full lg:w-56">
          <CardBody className="bg-gray-950/50 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-black hover:shadow-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full h-min flex flex-col items-center">
            <CardItem translateZ="50" className="text-md font-bold text-black text-center">
              Aarna Sahu
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-black text-sm max-w-sm mt dark:text-black">
              Sponsor Lead
            </CardItem>
            <div className="mt-4 flex flex-col items-center">
              <CardItem translateZ={20} className="py-2 rounded-xl text-xs font-normal dark:text-black">
                <img
                  src={aarnaPng}
                  width="125"
                  height="125"
                  className="rounded-full"
                  alt="Aarna Sahu"
                />
              </CardItem>
              <CardItem translateZ={20} className="py-2 rounded-xl text-xs font-normal dark:text-black flex justify-center ">
                <a href="https://www.linkedin.com/in/aarna-sahu-2579b2234/" target="_blank">
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

        <CardContainer className="w-full lg:w-56 lg:h-72">
          <CardBody className="bg-gray-950/50 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-black hover:shadow-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full h-full flex flex-col items-center">
            <CardItem translateZ="50" className="text-md font-bold text-black text-center">
              Poorvi Vijayananda
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-black text-sm max-w-sm mt dark:text-black">
              Marketing Lead
            </CardItem>
            <div className="mt-4 flex flex-col items-center">
              <CardItem translateZ={20} className="py-2 rounded-xl text-xs font-normal dark:text-black">
                <img
                  src={poorviPng}
                  width="125"
                  height="125"
                  className="rounded-full"
                  alt="Poorvi Vijayananda"
                />
              </CardItem>
              <CardItem translateZ={20} className="py-2 rounded-xl text-xs font-normal dark:text-black flex justify-center pt-4">
                <a href="https://www.linkedin.com/in/poorvi-vijayananda-5a764a213/" target="_blank">
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
      <div className="flex flex-wrap justify-center gap-4 max-w-5xl w-full mb-10">
      <CardContainer className="w-full lg:w-56 lg:h-68">
          <CardBody className="bg-gray-950/50 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-black hover:shadow-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full h-full flex flex-col items-center">
            <CardItem translateZ="50" className="text-md font-bold text-black text-center">
              Pranay Jain
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-black text-sm max-w-sm mt dark:text-black">
              Finance Lead
            </CardItem>
            <div className="mt-4 flex flex-col items-center">
              <CardItem translateZ={20} className="py-2 rounded-xl text-xs font-normal dark:text-black">
                <img
                  src={pranayPng}
                  width="125"
                  height="125"
                  className="rounded-full"
                  alt="Pranay Jain"
                />
              </CardItem>
              <CardItem translateZ={20} className="py-2 rounded-xl text-xs font-normal dark:text-black flex justify-center">
                <a href="https://www.linkedin.com/in/pranay-jain-b9b287223/" target="_blank">
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
        <CardContainer className="w-full lg:w-56 lg:h-72">
          <CardBody className="bg-gray-950/50 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-black hover:shadow-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full h-full flex flex-col items-center">
            <CardItem translateZ="50" className="text-md font-bold text-black text-center">
              Aarav Garg
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-black text-sm max-w-sm mt dark:text-black">
              Marketing
            </CardItem>
            <div className="mt-4 flex flex-col items-center">
              <CardItem translateZ={20} className="py-2 rounded-xl text-xs font-normal dark:text-black">
                <img
                  src={aaravPng}
                  width="125"
                  height="125"
                  className="rounded-full"
                  alt="Aarav Garg"
                />
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default Team;
