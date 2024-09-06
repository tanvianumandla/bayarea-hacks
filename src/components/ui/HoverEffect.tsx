// @ts-nocheck

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import linkedinPng from "../../assets/linkedin.png";
import blankPic from "../../assets/blankPic.jpeg";
import NaveenPic from "../../assets/Naveen.png";
import VenkatPic from "../../assets/Venkat.png";
import RatanPic from "../../assets/Ratra.jpeg";
import MandalPic from "../../assets/Mandal.jpg";
import HarshPic from "../../assets/harsh.jpg";
import Anjanapic from "../../assets/Anjana.png";
import Padmapic from "../../assets/Padma.png";
import NehaPng from "../../assets/neha.png";
import SenanPng from "../../assets/senan.png";
import SaeedPng from "../../assets/saeed.png";


export const projects = [
  {
    title: "Naveen Krishnan",
    description: "Solutions Architect at Microsoft",
    link: "https://www.linkedin.com/in/navintkr/",
    png: NaveenPic,
  },

  {
    title: "Venkat Challa",
    description: "Software Engineer at Fictiv",
    link: "https://www.linkedin.com/in/venkata-195681206/",
    png: VenkatPic,
  },

  {
    title: "Karan Kumar Ratra",
    description: "Senior Software Engineer at Walmart",
    link: "https://www.linkedin.com/in/karanratra07/",
    png: RatanPic,
  },

  {
    title: "Joydeb Mandal",
    description: "Director Inspirage",
    link: "https://www.linkedin.com/in/joydeb-mandal-b1664b9/",
    png: MandalPic,
  },

  {
    title: "Harsh Alkutkar",
    description: "Software Engineer at Doordash ",
    link: "https://www.linkedin.com/in/alkya/",
    png: HarshPic,
  },

  {
    title: "Anjana Manian",
    description: "CEO at DIYA Research",
    link: "https://www.linkedin.com/in/anmanian/",
    png: Anjanapic,
  },
  { title: "Padmapriya Parthasarathy",
    description: "Senior Principal Engineer at Oracle & COO at DIYA Research",
    link: "https://www.linkedin.com/in/padmapriya-parthasarathy-2560584/",
    png: Padmapic,
  },
  { title: "Neha Surendranath",
    description: "Technical Program Manager",
    link: "https://www.linkedin.com/in/nsurendranath/",
    png: NehaPng,
  },
  { title: "Senan Khawaja",
    description: "Co-founder & CEO @ Kollegio",
    link: "https://www.linkedin.com/in/senankhawaja/",
    png: SenanPng,
  },
  { title: "Saeed Naeem",
    description: "CTO @ Kollegio",
    link: "https://www.linkedin.com/in/saeednaeem/",
    png: SaeedPng,
  }
  // ...rest of the projects
];

export const HoverEffect = () => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-5 z-20">
      <div className="flex flex-wrap justify-center">
        {projects.map((project, idx) => (
          <div
            key={project?.link}
            className="relative group  block p-2 h-full w-full sm:w-1/2 md:w-1/3"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground" // required for the background to follow
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className=" rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-light to-light border border-transparent group-hover:border-slate-700 relative z-50">
              <div className="relative z-50">
                <div className="p-4">
                  <h4 className="text-lg text-black font-bold tracking-wide mt-4 text-center flex items-center justify-center h-12">
                    {project.title}
                  </h4>
                  <p className="mt-2 text-black tracking-wide leading-relaxed text-sm text-center flex items-center justify-center h-11">
                    {project.description}
                  </p>
                  <div className="py-5 rounded-xl text-xs font-normal dark:text-black flex items-center justify-center">
                    <img
                      className="rounded-full aspect-square object-cover"
                      src={project.png}
                      width="125"
                      height="125"
                      alt={project.title}
                    />
                  </div>
                  <div className="pt-2 rounded-xl text-xs font-normal dark:text-black flex w-full justify-center">
                    <a href={project.link} target="_blank">
                      <img
                        src={linkedinPng}
                        className="rounded-sm"
                        width="25"
                        height="25"
                        alt="LinkedIn Logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};