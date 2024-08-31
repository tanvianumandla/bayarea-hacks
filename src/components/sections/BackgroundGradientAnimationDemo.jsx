import React, { useEffect, useState } from "react";
import { Meteors } from "../ui/meteors";
import { Button } from "@nextui-org/button";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { ArrowRight } from "lucide-react";

export function BackgroundGradientAnimationDemo() {
  const DATE_OF_EVENT = new Date(2024, 8, 7, 8, 0);

  const getFormattedTime = () => {
    let time = DATE_OF_EVENT.getTime() - new Date().getTime();

    const result = {};

    result.days = Math.floor(time / (1000 * 60 * 60 * 24));

    time %= 1000 * 60 * 60 * 24;

    result.hrs = Math.floor(time / (1000 * 60 * 60));

    time %= 1000 * 60 * 60;

    result.min = Math.floor(time / (1000 * 60));

    time %= 1000 * 60;

    result.sec = Math.floor(time / 1000);

    return result;
  };

  const [formattedTime, setFormattedTime] = useState(getFormattedTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setFormattedTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <BackgroundGradientAnimation>
      <div className="bg-gradient-to-t from-primary to-primary">
        <div className="h-screen absolute w-screen">
          <div
            className="relative border-none px-4 h-full overflow-visible rounded-2xl flex flex-col 
          justify-center items-start"
          >
            <div className="w-full flex flex-col items-center justify-center overflow-visible rounded-md z-20">
              <div className="flex-col text-center">
                <div>
                  <h1 className="text-5xl md:text-8xl sm:text-6xl lg:text-9xl font-bold relative bg-gradient-to-b from-secondary to-secondary inline-block text-transparent bg-clip-text">
                    Bay Hacks
                  </h1>
                </div>
                <div className="mt-12"> {/* Updated the margin here */}
                  <h2 className="text-sm md:text-xl sm:text-3xl lg:text-5xl font-semibold relative bg-gradient-to-b from-secondary to-secondary block text-transparent bg-clip-text leading-normal">
                    Milpitas Hacks X Regent Hacks
                  </h2>
                </div>
                <div className="md:text-xl text-lg lg:text-2xl text-gray-900 flex justify-center gap-3 pt-5 pb-10">
                  <h2 className="">September 7, 2024</h2>
                  <a
                    href="https://www.google.com/maps/place/Hacker+Dojo/@37.3962541,-122.0516494,17z/data=!3m1!4b1!4m6!3m5!1s0x808fb71274e6acd3:0x9f6f7e2c42ca6e51!8m2!3d37.3962541!4d-122.0490745!16s%2Fg%2F1hhj6y_33?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    className="hover:underline "
                  >
                    @Prospect High School
                  </a>
                </div>
              </div>
              <div className="grid grid-flow-col gap-10 text-center auto-cols-max">
                <div className="flex flex-col">
                  <span className="countdown font-mono text-5xl text-black">
                    <span style={{ "--value": formattedTime.days }}></span>
                  </span>
                  <span className="text-black">days</span>
                </div>
                <div className="flex flex-col">
                  <span className="countdown font-mono text-5xl text-black">
                    <span style={{ "--value": formattedTime.hrs }}></span>
                  </span>
                  <span className="text-black">hours</span>
                </div>
                <div className="flex flex-col">
                  <span className="countdown font-mono text-5xl text-black">
                    <span style={{ "--value": formattedTime.min }}></span>
                  </span>
                  <span className="text-black">min</span>
                </div>
                <div className="flex flex-col">
                  <span className="countdown font-mono text-5xl text-black">
                    <span style={{ "--value": formattedTime.sec }}></span>
                  </span>
                  <span className="text-black">sec</span>
                </div>
              </div>
              <a
                target="_blank"
                href="https://tripetto.app/run/RYUUS6U41V"
                className="z-20 pt-14"
              >
                <Button
                  size="lg"
                  className="h-16 bg-gradient-to-br from-light to-light"
                >
                  Register
                  <ArrowRight />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}


