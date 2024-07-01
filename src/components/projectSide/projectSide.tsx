import Image from "next/image";
import { useEffect } from "react";
import pattern from "@/images/black-plain-concrete-textured.jpg";

function ProjectSide({ setProjectSide, projectSide }) {
  useEffect(() => {
    if (projectSide) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [projectSide]);
  return (
    <div
      className={`fixed flex top-0 right-0  h-screen  z-40 duration-500 ${
        projectSide ? "w-full" : "w-0"
      }`}
    >
      <div
        onClick={() => setProjectSide(false)}
        className=" w-[30%] h-full bg-black opacity-20"
      ></div>
      <div className=" relative flex-1 bg-black h-full">
        <Image
          className="absolute w-full h-full left-0 top-0 opacity-20 touch-none "
          src={pattern}
          alt="pattern"
        />
        <div className="absolute w-full h-full left-0 top-0"></div>
      </div>
    </div>
  );
}

export default ProjectSide;
