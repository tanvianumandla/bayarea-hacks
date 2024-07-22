import { Link } from "react-router-dom";
import hackClubLogoPng from "../../assets/hack-club-logo.png";
import onePasswordPng from "../../assets/1PasswordLogo.png";
import echo3dPng from "../../assets/echo3d.png";
import desmosPng from "../../assets/desmos.png";
import interviewcakePng from "../../assets/interviewcake.png";

const Sponsors = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-gray-950 to-gray-900 pt-20 pb-40 pl-5 pr-5">
      <div className="pb-20">
        <h1 className="text-6xl md:text-7xl font-bold">Sponsors</h1>
      </div>

      <div className="pt-40 flex flex-wrap justify-center gap-10">
        <a href="https://hackclub.com/" target="_blank">
          <img src={hackClubLogoPng} className="w-80" alt="Hack Club Logo" />
        </a>
        <a href="https://1password.com/" target="_blank">
          <img src={onePasswordPng} className="w-80" alt="1Password Logo" />
        </a>
        <a href="https://www.echo3d.com/" target="_blank">
          <img src={echo3dPng} className="w-80" alt="echo3D Logo" />
        </a>
        <a href="https://www.desmos.com/" target="_blank">
          <img src={desmosPng} className="w-80" alt="Desmos Logo" />
        </a>
        <a href="https://www.interviewcake.com/" target="_blank">
          <img
            src={interviewcakePng}
            className="w-96"
            alt="Interview Cake Logo"
          />
        </a>
      </div>
      <div className="pt-20">
        <h1 className="text-2xl font-bold text-center">
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
