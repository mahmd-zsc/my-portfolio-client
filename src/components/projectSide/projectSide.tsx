import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import pattern from "@/images/black-plain-concrete-textured.jpg";
import "./projectSide.scss";
import axios from "axios";
function ProjectSide({ setProjectSide, projectSide }) {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState("");
  let box = useRef();

  useEffect(() => {
    if (projectSide) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    const handleClickOutside = (event) => {
      if (box.current && !box.current.contains(event.target)) {
        setProjectSide(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [projectSide, setProjectSide]);
  // useEffect( async () => {
  //   let data = await axios.get("http://localhost:8000/api/skills");
  //   console.log(data);
  // }, [projectSide]);
  return (
    <>
      {projectSide && (
        <div className=" fixed h-screen w-full bg-black z-40 opacity-40"></div>
      )}

      <div
        className={`fixed bottom-0 left-1/2 -translate-x-1/2 z-40 duration-300 flex justify-center container overflow-y-full  ${
          projectSide ? "h-screen" : "h-0"
        }`}
      >
        
        <div
          ref={box}
          className=" box relative flex-1 bg-slate-950 -bottom-12     rounded-2xl h-[95%] overflow-y-scroll"
        >
          <div
            style={{ minHeight: "calc(100vh - 48px)" }}
            className="   relative text-white p-4"
          >
            <Image
              className="absolute w-full h-full left-0 top-0 opacity-20 touch-none"
              src={pattern}
              alt="pattern"
            />
            <div className="absolute w-full h-full left-0 top-0"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectSide;
