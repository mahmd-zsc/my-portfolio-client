import pattern from "@/images/black-plain-concrete-textured.jpg";
import Image from "next/image";
import project from "@/images/Untitled.png";
import { FaGithub } from "react-icons/fa";
function Projects({ setHoverProject, setHiddenMouse }) {
  return (
    <div
    //   style={{
    //     background:
    //       "linear-gradient(0deg, rgba(0,26,43,1) 7%, rgba(0,21,34,1) 30%, rgba(0,11,19,1) 70%, rgba(0,0,0,1) 96%)",
    //   }}
      className="  bg-black  relative py-10 "
    >
      <div className=" container">
        <div className=" mb-20 text-center text-textColor text-3xl capitalize font-bold relative z-30 ">
          <h3>my cool projects</h3>
          <a href="https://github.com/mahmd-zsc" target="_blank" className=" cursor-none">
            <div
              onMouseEnter={() => setHiddenMouse(true)}
              onMouseLeave={() => setHiddenMouse(false)}
              className=" bg-secoundDarkBg w-fit m-auto flex justify-center items-center text-sm px-2 py-1 rounded-full mt-6 gap-2 hover:text-black hover:bg-white duration-300 hover:scale-105"
            >
              <span>check more on github</span>
              <FaGithub />
            </div>
          </a>
        </div>
        <div className=" grid  lg:grid-cols-2 gap-10 overflow-hidden relative z-40 w-full">
          {Array.from({ length: 8 }, (_, index) => (
            <div
              onMouseEnter={() => setHoverProject(true)}
              onMouseLeave={() => setHoverProject(false)}
              key={index}
              className=" relative overflow-hidden rounded-2xl"
            >
              <Image
                className="duration-300 filter  hover:scale-105"
                src={project}
                alt="project"
              />
              <div className=" absolute w-full h-full left-0 top-0 bg-black opacity-10 hover:opacity-0 duration-300 " />
            </div>
          ))}
        </div>
      </div>
      <Image
        className="absolute w-full h-full left-0 top-0 opacity-20 touch-none "
        src={pattern}
        alt="pattern"
      />
      <div className="absolute w-full h-full left-0 top-0"></div>{" "}
    </div>
  );
}

export default Projects;
