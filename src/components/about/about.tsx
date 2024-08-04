import pattern from "@/images/black-plain-concrete-textured.jpg";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import me from "@/images/me-darkpng.png";
import { useState } from "react";

import { MdOutlineContentCopy, MdOutlineDone } from "react-icons/md";

interface AboutProps {
  setHiddenMouse: (hidden: boolean) => void;
}

function About({ setHiddenMouse }: AboutProps) {
  const [isCopy, setIsCopy] = useState(false);



  const handleCopy = () => {
    navigator.clipboard.writeText("moma8607914@gmail.com");
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 1000);
  };

  return (
    <div className="bg-black relative py-10">
      <div className="container overflow-hidden">
        <div
          className="mb-20 text-center text-textColor text-3xl capitalize font-bold relative z-30"
          data-aos="fade-up" // AOS animation on scroll
        >
          <h3>About</h3>
          <a
            href="https://www.linkedin.com/in/mohamed-mahmound-b160b2270/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-none"
          >
            <div
              onMouseEnter={() => setHiddenMouse(true)}
              onMouseLeave={() => setHiddenMouse(false)}
              className="bg-secoundDarkBg w-fit m-auto flex justify-center items-center text-sm px-2 py-1 rounded-full mt-6 gap-2 hover:text-black hover:bg-white duration-300 hover:scale-105"
              aria-label="Connect on LinkedIn"
              data-aos="fade-in" // AOS animation on scroll
            >
              <span>Connect on LinkedIn</span>
              <FaLinkedin />
            </div>
          </a>
        </div>
        <div
          className="grid lg:grid-cols-2 gap-8 items-center lg:px-20"
          data-aos="fade-up" // AOS animation on scroll
        >
          <Image
            src={me}
            alt="A photo of Mohamed Mahmoud"
            className="p-16 w-full rounded-2xl"
            data-aos="zoom-in" // AOS animation on scroll
          />
          <div
            className="text-textColor relative z-30 text-xl md:text-2xl text-center md:text-start"
            data-aos="fade-up" // AOS animation on scroll
          >
            <p className="mb-16">
              Hello! I&apos;m Mohamed Mahmoud, a Frontend developer.
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
              className={`w-fit mx-auto md:mx-0 mt-6 relative px-6 py-3 rounded-full ${
                !isCopy
                  ? "bg-secoundDarkBg hover:bg-white text-textColor hover:text-black duration-300"
                  : "bg-white hover:bg-secoundDarkBg text-black hover:text-white"
              }`}
              aria-label={!isCopy ? "Copy email" : "Email copied"}
              data-aos="fade-up" // AOS animation on scroll
            >
              <p className="flex items-center gap-2 text-2xl">
                <span className="hidden md:block">
                  {!isCopy ? <MdOutlineContentCopy /> : <MdOutlineDone />}
                </span>
                {!isCopy ? (
                  <>
                    <span className="hidden md:block">
                      moma8607914@gmail.com
                    </span>
                    <span className="md:hidden text-lg">Contact</span>
                  </>
                ) : (
                  <>
                    <span className="hidden md:block">Copied</span>
                    <span className="md:hidden text-lg">Email copied</span>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image
        className="absolute w-full h-full left-0 top-0 opacity-20 touch-none"
        src={pattern}
        alt="Decorative pattern background"
      />
      <div className="absolute w-full h-full left-0 top-0"></div>
    </div>
  );
}

export default About;
