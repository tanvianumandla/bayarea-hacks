import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import tosharPng from "../../assets/toshar.png";
import linkedInPng from "../../assets/linkedin.png";

const Volunteer = () => {
    return (
        <div className="flex flex-col items-center py-20 px-5 bg-gradient-to-t from-primary to-primary">
        <div className="pb-20">
          <h1 className="text-6xl md:text-7xl font-bold text-black">Volunteer</h1>
        </div> 
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl w-full mb-10">
        <CardContainer className="w-full lg:w-56 lg:h-72">
          <CardBody className="bg-gray-950/50 relative group/card transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-black hover:shadow-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-full h-full flex flex-col items-center">
            <CardItem translateZ="50" className="text-md font-bold text-black text-center">
              Toshar Singh
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-black text-sm max-w-sm mt dark:text-black">
              Volunteer & Photographer
            </CardItem>
            <div className="mt-4 flex flex-col items-center">
              <CardItem translateZ={20} className="py-2 rounded-xl text-xs font-normal dark:text-black">
                <img
                  src={tosharPng}
                  width="125"
                  height="125"
                  className="rounded-full"
                  alt="Toshar Singh"
                />
              </CardItem>
              <CardItem translateZ={20} className="py-2 rounded-xl text-xs font-normal dark:text-black flex justify-center">
                <a href="" target="_blank">
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
    )
}

export default Volunteer;