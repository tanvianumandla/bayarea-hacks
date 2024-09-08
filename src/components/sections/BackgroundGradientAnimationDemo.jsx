import React from "react";
import { Meteors } from "../ui/meteors";
import { Button } from "@nextui-org/button";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { ArrowRight } from "lucide-react";

export function BackgroundGradientAnimationDemo() {
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
                <div className="mt-12">
                  <h2 className="text-sm md:text-xl sm:text-3xl lg:text-5xl font-semibold relative bg-gradient-to-b from-secondary to-secondary block text-transparent bg-clip-text leading-normal">
                    Milpitas Hacks X Regent Hacks
                  </h2>
                </div>
                <div className="md:text-xl text-lg lg:text-2xl text-gray-900 flex justify-center gap-3 pt-5 pb-10">
                  <h2 className="">September 7, 2024</h2>
                  <a
                    href="https://www.google.com/maps/dir//west+valley+branch+library/@37.304911,-121.9855946,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x808fcab09ab9e569:0x5264bddc466b6c5f!2m2!1d-121.9793918!2d37.3023684?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    className="hover:underline"
                  >
                    @West Valley Branch Library
                  </a>
                </div>
              </div>
              <div className="text-center text-5xl text-black">
                <h2>Thank you for attending Bay Hacks!</h2>
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


