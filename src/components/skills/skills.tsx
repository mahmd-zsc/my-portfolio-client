import pattern from "@/images/black-plain-concrete-textured.jpg";
import Image from "next/image";
import { useEffect } from "react";


import { BiLogoTypescript } from "react-icons/bi";
import { DiJavascript } from "react-icons/di";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaNode,
  FaReact,
  FaRegPaperPlane,
  FaSass,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiRedux } from "react-icons/si";

// Define the interface for the component props
interface SkillsProps {
  setHoverProject: (hover: boolean) => void;
  setHiddenMouse: (hidden: boolean) => void;
}

function Skills({ setHoverProject, setHiddenMouse }: SkillsProps) {


  return (
    <div className="bg-black relative py-10">
      <div className="container relative z-30 overflow-hidden">
        <div
          className="mb-20 text-center text-textColor text-3xl capitalize font-bold relative z-30"
          data-aos="fade-up" // AOS animation on scroll
        >
          <h3>Skills</h3>
          <a
            href="https://drive.google.com/file/d/1UQGNi7HEbFqKX-9lWbLDkuMMLOomz7y3/view"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-none"
          >
            <div
              onMouseEnter={() => setHiddenMouse(true)}
              onMouseLeave={() => setHiddenMouse(false)}
              className="bg-secoundDarkBg w-fit m-auto flex justify-center items-center text-sm px-2 py-1 rounded-full mt-6 gap-2 hover:text-black hover:bg-white duration-300 hover:scale-105"
              data-aos="fade-in" // AOS animation on scroll
            >
              <span>get my resume</span>
              <FaRegPaperPlane />
            </div>
          </a>
        </div>
        <div
          style={{
            background:
              "linear-gradient(130deg, rgba(109,2,42,1) 26%, rgba(4,34,76,1) 48%, rgba(106,0,40,1) 79%, rgba(109,2,42,1) 87%)",
          }}
          className="relative text-xl sm:text-2xl md:text-4xl lg:text-6xl overflow-hidden text-white flex justify-center items-center py-40 w-full bg-red-500 rounded-2xl"
          data-aos="fade-up" // AOS animation on scroll
        >
          <div className="flex relative items-center justify-center gap-4 flex-wrap h-full">
            <FaReact className="opacity-80" data-aos="zoom-in" />
            <RiNextjsFill data-aos="zoom-in" />
            <FaNode data-aos="zoom-in" />
            <SiExpress data-aos="zoom-in" />
            <FaBootstrap data-aos="zoom-in" />
            <FaHtml5 data-aos="zoom-in" />
            <FaCss3Alt data-aos="zoom-in" />
            <DiJavascript data-aos="zoom-in" />
            <RiTailwindCssFill data-aos="zoom-in" />
            <FaSass data-aos="zoom-in" />
            <SiMongodb data-aos="zoom-in" />
            <SiRedux data-aos="zoom-in" />
            <BiLogoTypescript className="opacity-80" data-aos="zoom-in" />
          </div>
          <Image
            className="absolute w-full h-full left-0 top-0 opacity-40 touch-none"
            src={pattern}
            alt="pattern"
          />
          <div className="absolute w-full h-full left-0 top-0"></div>
        </div>
      </div>
      <Image
        className="absolute w-full h-full left-0 top-0 opacity-20 touch-none"
        src={pattern}
        alt="pattern"
      />
      <div className="absolute w-full h-full left-0 top-0"></div>
    </div>
  );
}

export default Skills;
