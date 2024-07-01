import pattern from "@/images/black-plain-concrete-textured.jpg";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import me from "@/images/me-darkpng.png";
import { useState } from "react";
import { MdOutlineContentCopy, MdOutlineDone } from "react-icons/md";
function About({ setHiddenMouse }) {
  let [isCopy, setIsCopy] = useState(false);
  let handleCopy = () => {
    navigator.clipboard.writeText("moma8607914@gmail.com");
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 1000);
  };
  return (
    <div className="bg-black  relative py-10">
      <div className=" container  overflow-hidden">
        <div className=" mb-20 text-center text-textColor text-3xl capitalize font-bold relative z-30  ">
          <h3>about</h3>
          <a
            href="https://www.linkedin.com/in/mohamed-mahmound-b160b2270/"
            target="_blank"
            className=" cursor-none"
          >
            <div
              onMouseEnter={() => setHiddenMouse(true)}
              onMouseLeave={() => setHiddenMouse(false)}
              className="bg-secoundDarkBg w-fit m-auto flex justify-center items-center text-sm px-2 py-1 rounded-full mt-6 gap-2 hover:text-black hover:bg-white duration-300 hover:scale-105"
            >
              <span>Connect on LinkedIn</span>
              <FaLinkedin />
            </div>
          </a>
        </div>
        <div className=" grid lg:grid-cols-2 gap-8 items-center lg:px-20 ">
          <Image
            src={me}
            alt="my photo"
            className=" p-16 w-full rounded-2xl   "
          />
          <div className=" text-textColor relative z-30 text-xl md:text-2xl text-center md:text-start ">
            <p className=" mb-16">
              Hello! I'm mohamed mahmoud, an Frontend developer.
            </p>
            <p>
              I specialize in designing and building dynamic, high-performance
              web applications that captivate users and drive substantial
              business growth. My expertise lies in leveraging modern frontend
              technologies and frameworks to create seamless, responsive, and
              visually appealing user interfaces tailored to your unique needs.
            </p>
            <div
              onMouseEnter={() => setHiddenMouse(true)}
              onMouseLeave={() => setHiddenMouse(false)}
              onClick={handleCopy}
              className={` w-fit mx-auto md:mx-0 mt-6 relative  px-6 py-3 rounded-full    ${
                !isCopy
                  ? "bg-secoundDarkBg hover:bg-white text-textColor hover:text-black duration-300"
                  : " bg-white hover:bg-secoundDarkBg text-black hover:text-white "
              }  `}
            >
              <p className="   flex items-center gap-2 text-2xl">
                <span className=" hidden md:block">
                  {!isCopy ? <MdOutlineContentCopy /> : <MdOutlineDone />}
                </span>
                {!isCopy ? (
                  <>
                    <span className=" hidden md:block">
                      moma8607914@gmail.com
                    </span>
                    <span className="  md:hidden text-lg">contact</span>
                  </>
                ) : (
                  <>
                    <span className="hidden md:block">copied</span>
                    <span className="md:hidden text-lg">copied email</span>
                  </>
                )}
              </p>
            </div>
          </div>
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
