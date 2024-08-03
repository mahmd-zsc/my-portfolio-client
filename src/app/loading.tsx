import Image from "next/image";
import React from "react";
import pattern from "@/images/black-plain-concrete-textured.jpg";
import logo from "@/images/image_processing20210911-8144-1jb2kfa.gif";
function Loading() {
  return (
    <div className="h-screen relative w-full flex justify-center items-center bg-black">
      <Image
        src={logo}
        alt="logo"
        width="200"
        className=""
      />
      <Image
        className="absolute w-full h-full left-0 top-0 opacity-20"
        src={pattern}
        alt="pattern"
      />
      <div className="absolute w-full h-full left-0 top-0"></div>{" "}
    </div>
  );
}

export default Loading;
