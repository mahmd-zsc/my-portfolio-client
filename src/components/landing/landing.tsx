import pattern from "@/images/black-plain-concrete-textured.jpg";
import Image from "next/image";
import myPhoto from "@/images/Untitled-2.png";
import "./landing.scss";
export default function Landing({ setHiddenMouse }) {
  return (
    <div className=" bg-black  pt-[100px] text-white relative ">
      <div className="container  ">
        <div className=" flex items-center pb-20 ">
          <div className="flex-1 flex flex-col gap-20 relative z-30 pt-20 sm:pt-0">
            <div>
              <div
                onMouseEnter={() => setHiddenMouse(true)}
                onMouseLeave={() => setHiddenMouse(false)}
                className=" bg-[#1b1b1b] w-fit px-4 py-1 rounded-full mb-6 text-sm flex items-center gap-2 hover:scale-105 duration-300"
              >
                <div className=" AvailableBall w-2 h-2 bg-green-500 rounded-full"></div>
                <p>Available for new opportunities</p>
              </div>
              <h1 className=" capitalize text-textColor text-7xl ">
                mern stack developer
              </h1>
            </div>

            <p className=" capitalize text-textColor">
              If your business aims to innovate, excel, and lead in the digital
              world...let me be your expert MERN stack developer, driving your
              vision to reality.
            </p>
          </div>
          <Image
            src={myPhoto}
            alt="myPhoto"
            width={600}
            className="hidden sm:block"
          />
        </div>
        <div className="scrolldown">
          <svg height="30" width="10">
            <circle className="scrolldown-p1" cx="5" cy="15" r="2" />
            <circle className="scrolldown-p2" cx="5" cy="15" r="2" />
          </svg>
        </div>
        <Image
          className="absolute w-full h-full left-0 top-0 opacity-20"
          src={pattern}
          alt="pattern"
        />
        <div className="absolute w-full h-full left-0 top-0"></div>{" "}
      </div>
    </div>
  );
}
