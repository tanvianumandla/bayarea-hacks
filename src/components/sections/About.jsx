import { GraduationCap, Utensils, Trophy } from "lucide-react";

// Constants for demonstration
const prizes = 19;
const prizeAmt = 1600;

const About = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-primary to-primary pt-20 pb-40 pl-5 pr-5">
      <div className="pb-20">
        <h1 className="text-6xl md:text-7xl font-bold transition-transform text-secondary">About</h1>
      </div>
      <div className="flex gap-5 max-w-7xl w-full flex-col md:flex-row">
        <div className="flex flex-col p-10 bg-red rounded-md w-full transition-all shadow-lg hover:shadow-xl">
          <h2 className="font-bold text-3xl inline-flex gap-5 py-3 text-black"><GraduationCap size={35}/>Beginner Friendly</h2>
          <h3 className="font-normal text-lg text-black">
            All high schoolers regardless of coding experience can have fun!
          </h3>
        </div>
        <div className="flex flex-col p-10 bg-red rounded-md w-full transition-all shadow-lg hover:shadow-xl">
          <h2 className="font-bold text-3xl inline-flex gap-5 py-3 text-black"><Utensils size={35}/>Fully catered</h2>
          <h3 className="font-normal text-lg text-black">
            No need to bring lunch or dinner! Our sponsors have generously
            covered food for everyone!
          </h3>
        </div>
        <div className="flex flex-col p-10 bg-red rounded-md w-full transition-all shadow-lg hover:shadow-xl">
          <h2 className="font-bold text-3xl inline-flex gap-5 py-3 text-black"><Trophy size={35} />Prizes</h2>
          <h3 className="font-normal text-lg text-black"> Over $47,000 worth of monetary and non-monetary prizes, and internship opportunities provided!
</h3>
        </div>
      </div>
    </div>
  );
};

export default About;

