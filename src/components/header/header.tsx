"use client";
import Image from "next/image";
import logo from "@/images/image_processing20210911-8144-1jb2kfa.gif";
import me from "@/images/Untitled-6.png";
import { useState } from "react";
import { MdOutlineContentCopy, MdOutlineDone } from "react-icons/md";

// Define the interface for the component props
interface HeaderProps {
  setHiddenMouse: (hidden: boolean) => void;
}

function Header({ setHiddenMouse }: HeaderProps) {
  const [isCopy, setIsCopy] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("moma8607914@gmail.com");
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 1000);
  };

  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 container z-10">
      <div className="flex justify-between items-center py-6">
        <div
          onMouseEnter={() => setHiddenMouse(true)}
          onMouseLeave={() => setHiddenMouse(false)}
          className="relative hover:scale-125 duration-200"
        >
          <Image
            src={logo}
            alt="logo"
            width={100}
            className="opacity-50 hidden md:block"
          />
          <Image
            src={me}
            alt="me"
            width={50}
            className="md:hidden rounded-full"
          />
          <div className="absolute w-full h-full left-0 top-0"></div>
        </div>
        <div
          onMouseEnter={() => setHiddenMouse(true)}
          onMouseLeave={() => setHiddenMouse(false)}
          onClick={handleCopy}
          className={`relative px-6 py-3 rounded-full ${
            !isCopy
              ? "bg-secoundDarkBg hover:bg-white text-textColor hover:text-black duration-300"
              : "bg-white hover:bg-secoundDarkBg text-black hover:text-white"
          }`}
        >
          <p className="flex items-center gap-2 text-2xl">
            <span className="hidden md:block">
              {!isCopy ? <MdOutlineContentCopy /> : <MdOutlineDone />}
            </span>
            {!isCopy ? (
              <>
                <span className="hidden md:block">moma8607914@gmail.com</span>
                <span className="md:hidden text-lg">contact</span>
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
  );
}

export default Header;
