import pattern from "@/images/black-plain-concrete-textured.jpg";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import me from "@/images/me.png";
function About({ setHoverProject, setHiddenMouse }) {
  return (
    <div className="bg-black  relative py-10">
      <div className=" container  overflow-hidden">
        <div className=" mb-20 text-center text-textColor text-3xl capitalize font-bold relative z-30 ">
          <h3>about</h3>
          <a
            href="https://www.linkedin.com/in/mohamed-mahmound-b160b2270/"
            target="_blank"
            className=" cursor-none"
          >
            <div
              onMouseEnter={() => setHiddenMouse(true)}
              onMouseLeave={() => setHiddenMouse(false)}
              className=" bg-secoundDarkBg w-fit m-auto flex justify-center items-center text-sm px-2 py-1 rounded-full mt-6 gap-2 hover:text-black hover:bg-white duration-300 hover:scale-105"
            >
              <span>Linked In</span>
              <FaLinkedin />
            </div>
          </a>
        </div>
        <div className=" grid grid-cols-2 items-center">
          <Image src={me} alt="my photo" className=" w-full   " />
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

export default About;
