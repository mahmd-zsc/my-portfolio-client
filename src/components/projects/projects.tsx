import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import pattern from "@/images/black-plain-concrete-textured.jpg";
interface Project {
  _id: string;
  image: {
    small: {
      url: string;
      width?: number;
      height?: number;
    };
  };
}

interface ProjectsProps {
  setHoverProject: (hover: boolean) => void;
  setHiddenMouse: (hidden: boolean) => void;
}

const Projects: React.FC<ProjectsProps> = ({
  setHoverProject,
  setHiddenMouse,
}) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    async function fetchData() {
      try {
        const response = await axios.get(
          "https://portfolio-backend-sable-delta.vercel.app/api/projects"
        );
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching projects. Please try again later.");
      }
    }
    fetchData();
  }, []);

  return (
    <div className="bg-black relative py-10">
      <div className="container">
        <div
          className="mb-20 text-center text-textColor text-3xl capitalize font-bold relative z-30"
          data-aos="fade-up" // AOS animation on scroll
        >
          <h3>My Cool Projects</h3>
          <a
            href="https://github.com/mahmd-zsc"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-none"
          >
            <div
              onMouseEnter={() => setHiddenMouse(true)}
              onMouseLeave={() => setHiddenMouse(false)}
              className="bg-secoundDarkBg w-fit m-auto flex justify-center items-center text-sm px-2 py-1 rounded-full mt-6 gap-2 hover:text-black hover:bg-white duration-300 hover:scale-105"
              data-aos="fade-in" // AOS animation on scroll
            >
              <span>Check more on GitHub</span>
              <FaGithub />
            </div>
          </a>
        </div>
        {error && <div className="text-center text-red-500 mb-4">{error}</div>}
        <div
          className="grid lg:grid-cols-2 gap-10 overflow-hidden relative z-30 w-full"
          data-aos="fade-up" // AOS animation on scroll
        >
          {projects.map((project) => (
            <Link href={`/project/${project._id}`} key={project._id} passHref>
              <div
                onMouseEnter={() => setHoverProject(true)}
                onMouseLeave={() => setHoverProject(false)}
                className="relative overflow-hidden rounded-2xl cursor-none"
                data-aos="zoom-in" // AOS animation on scroll
              >
                <Image
                  className="duration-300 filter hover:scale-105"
                  src={project.image.small.url}
                  alt="Project thumbnail"
                  width={project.image.small.width || 600} // Provide default if dimensions are not available
                  height={project.image.small.height || 400} // Provide default if dimensions are not available
                  layout="responsive"
                />
                <div className="absolute w-full h-full left-0 top-0 bg-black opacity-10 hover:opacity-0 duration-300" />
              </div>
            </Link>
          ))}
        </div>
        <Image
          className="absolute w-full h-full left-0 top-0 opacity-20"
          src={pattern}
          alt="Decorative pattern background"
        />
      </div>
      <div className="absolute w-full h-full left-0 top-0"></div>
    </div>
  );
};

export default Projects;
