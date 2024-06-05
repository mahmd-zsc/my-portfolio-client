import pattern from "@/images/black-plain-concrete-textured.jpg";
import Image from "next/image";

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

function Skills({ setHoverProject, setHiddenMouse }) {
  return (
    <div className="bg-black  relative py-10">
      <div className=" container relative z-30 overflow-hidden">
        <div className=" mb-20 text-center text-textColor text-3xl capitalize font-bold relative z-30 ">
          <h3>Skills</h3>
          <a
            href="https://drive.google.com/file/d/1UQGNi7HEbFqKX-9lWbLDkuMMLOomz7y3/view"
            target="_blank"
            className=" cursor-none"
          >
            <div
              onMouseEnter={() => setHiddenMouse(true)}
              onMouseLeave={() => setHiddenMouse(false)}
              className=" bg-secoundDarkBg w-fit m-auto flex justify-center items-center text-sm px-2 py-1 rounded-full mt-6 gap-2 hover:text-black hover:bg-white duration-300 hover:scale-105"
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
          className=" relative text-xl sm:text-2xl md:text-4xl lg:text-6xl overflow-hidden  text-white flex  justify-center items-center py-40  w-full bg-red-500 rounded-2xl "
        >
          <div className="flex relative items-center justify-center gap-4 flex-wrap  h-full         ">
            <FaReact className=" opacity-80" />
            <RiNextjsFill />
            <FaNode />

            <SiExpress />
            <FaBootstrap />
            <FaHtml5 />
            <FaCss3Alt />
            <DiJavascript />
            <RiTailwindCssFill />
            <FaSass />
            <SiMongodb />
            <SiRedux />
            <BiLogoTypescript className=" opacity-80" />
          </div>

          <Image
            className="absolute w-full h-full left-0 top-0 opacity-40 touch-none "
            src={pattern}
            alt="pattern"
          />
          <div className="absolute w-full h-full left-0 top-0"></div>
        </div>
      </div>
      <Image
        className="absolute w-full h-full left-0 top-0 opacity-20 touch-none "
        src={pattern}
        alt="pattern"
      />
      <div className="absolute w-full h-full left-0 top-0"></div>
    </div>
  );
}

export default Skills;
