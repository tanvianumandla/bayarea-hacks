import { Link } from "react-router-dom";
import hackClubLogoPng from "../../assets/hack-club-logo.png";
import desmosPng from "../../assets/desmos.png";
import wolframalphaPng from "../../assets/wolframalpha.png";
import axurePng from "../../assets/axure.png";
import acceptUPng from "../../assets/acceptU.png";
import elitePng from "../../assets/Elite.png";
import AoPSPng from "../../assets/AoPS.png";
import NetAppPng from "../../assets/NetApp.png";
import GongChapng from "../../assets/gongcha.png"
import ewavePng from "../../assets/ewave.png";

const Sponsors = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-t from-primary to-primary pt-20 pb-40 pl-5 pr-5">
      <div className="pb-20">
        <h1 className="text-6xl md:text-7xl font-bold text-black">Sponsors</h1>
      </div>

      <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-yellow-500">
          Gold
        </h2>

      <div className="pt-8 flex flex-wrap justify-center gap-10">
        <a href="https://www.netapp.com/" target="_blank">
          <img src={NetAppPng} className="h-30" alt="Net App Logo"/>
        </a>
      </div>

      <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500">
          Silver
        </h2>
      <div className="pt-20 flex flex-wrap justify-center gap-10">
        <a href="https://www.axure.com/" target="_blank">
          <img src={axurePng} className="h-30" alt="Axure Logo"/>
        </a>
        <a href="https://eliteprep.com/san-jose" target="_blank">
          <img src={elitePng} className="w-54 h-44" alt="Elite Logo"
          style={{ marginTop: '20px' }}/>
        </a>
        <a href="https://fremont.aopsacademy.org/" target="_blank">
          <img src={AoPSPng} className="w-54 h-44" alt="AoPS Logo"
          style={{ marginTop: '20px' }}/>
        </a>
        <a href="https://www.ewave.hk/" target="_blank">
          <img src={ewavePng} className="w-96 h-44 pb-8" alt="AoPS Logo"
          style={{ marginTop: '20px' }}/>
        </a>
      </div>
      <h2 className="pt-8 text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-yellow-900">
          Bronze
        </h2>
      <div className="pt-20 flex flex-wrap justify-center gap-10">
        <a href="https://hackclub.com/" target="_blank">
          <img src={hackClubLogoPng} className="w-80" alt="Hack Club Logo" />
        </a>
        <a href="https://www.desmos.com/" target="_blank">
          <img src={desmosPng} className="w-80" alt="Desmos Logo" />
        </a>
        <a href="https://www.wolframalpha.com/" target="_blank">
          <img src={wolframalphaPng} className="w-50 h-40" alt="Wolfram Alpha Logo" 
          style={{ marginTop: '-40px' }}/>
        </a>
        <a href="https://acceptu.com/" target="_blank">
          <img src={acceptUPng} className="w-50 h-40" alt="Accept U Logo" 
          style={{ marginTop: '-40px' }}/>
        </a>
        <a href="https://gong-cha-usa.com/" target="_blank">
          <img src={GongChapng} className="w-50 h-40" alt="Gong Cha Logo" 
          style={{ marginTop: '-40px' }}/>
        </a>
      </div>
      <div className="pt-20">
        <h1 className="text-2xl font-bold text-center text-black">
          Want to sponsor us?{" "}
          <Link to="https://regenthacks.com/docs/Bay%20Hacks%20Sponsorship%20Prospectus.pdf" className="text-blue-300 hover:underline">
            See our sponsors prospectus
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Sponsors;
