import { Megaphone } from "lucide-react";

const Tracks = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-primary primary pt-20 pb-40 pl-5 pr-5">
      <div className="pb-20">
        <h1 className="text-6xl md:text-7xl font-bold text-secondary text-black">Tracks</h1>
      </div>
      <div className="flex max-w-7xl w-full flex-col lg:flex-row gap-5 justify-evenly">
        <div className="flex flex-col gap-10 p-10 bg-red rounded-lg transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-black hover:shadow-black">
          <h2 className="font-bold text-3xl sm:text-4x inline-flex gap-5 text-black">
            <Megaphone size={35} />
            Track
          </h2>
          <h3 className="font-normal text-lg text-black">
            Cybersecurity
          </h3>
        </div>
        <div className="flex flex-col gap-10 p-10 bg-red rounded-lg transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-black hover:shadow-black">
          <h2 className="font-bold text-3xl sm:text-4xl inline-flex gap-5 text-black">
            <Megaphone size={35}/>
            Track
          </h2>
          <h3 className="font-normal text-lg text-black">
            Education
          </h3>
        </div>
        <div className="flex flex-col gap-10 p-10 bg-red rounded-lg transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-black hover:shadow-black">
          <h2 className="font-bold text-3xl sm:text-4xl inline-flex gap-5 text-black">
            <Megaphone size={35}/>
            Track
          </h2>
          <h3 className="font-normal text-lg text-black">
            Healthcare
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Tracks;

