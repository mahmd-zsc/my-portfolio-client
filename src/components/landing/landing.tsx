import { useEffect } from "react";
import pattern from "@/images/black-plain-concrete-textured.jpg";
import Image from "next/image";
import myPhoto from "@/images/Untitled-2.png";
import "./landing.scss";

interface LandingProps {
  setHiddenMouse: (hidden: boolean) => void;
}

export default function Landing({ setHiddenMouse }: LandingProps) {


  return (
    <div className="bg-black pt-[100px] pb-40 sm:pb-0 text-white relative">
      <div className="container">
        <div className="flex items-center pb-20">
          <div
            className="flex-1 flex flex-col gap-20 relative z-30 pt-20 md:pt-0"
            data-aos="fade-up" // AOS animation on scroll
          >
            <div
              onMouseEnter={() => setHiddenMouse(true)}
              onMouseLeave={() => setHiddenMouse(false)}
              className="bg-[#1b1b1b] w-fit mx-auto md:mx-0 px-4 py-1  rounded-full mb-12 sm:mb-6 text-sm flex items-center gap-2 hover:scale-105 duration-300"
              aria-label="Availability status "
            >
              <div className="AvailableBall w-2 h-2 bg-green-500 rounded-full hov"></div>
              <p>Available for new opportunities</p>
            </div>
            <h1
              className="capitalize text-textColor text-5xl md:text-7xl text-center md:text-start"
              data-aos="fade-right" // AOS animation on scroll
            >
              Frontend Developer
            </h1>
            <p
              className="text-center md:text-start capitalize text-textColor"
              data-aos="fade-left" // AOS animation on scroll
            >
              If your business aims to innovate, excel, and lead in the digital
              world, let me be your expert frontend developer, driving your
              vision to reality.
            </p>
          </div>
          <Image
            src={myPhoto}
            alt="A photo of Mohamed Mahmoud"
            width={600}
            className="hidden md:block"
            data-aos="zoom-in" // AOS animation on scroll
          />
        </div>
        <div className="scrolldown">
          <svg height="30" width="10" xmlns="http://www.w3.org/2000/svg">
            <circle className="scrolldown-p1" cx="5" cy="15" r="2" />
            <circle className="scrolldown-p2" cx="5" cy="15" r="2" />
          </svg>
        </div>
        <Image
          className="absolute w-full h-full left-0 top-0 opacity-20"
          src={pattern}
          alt="Decorative pattern background"
        />
        <div className="absolute w-full h-full left-0 top-0"></div>
      </div>
    </div>
  );
}
