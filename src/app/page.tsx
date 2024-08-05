"use client";
import { useState, useEffect } from "react";
import About from "@/components/about/about";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Landing from "@/components/landing/landing";
import MouseTrailer from "@/components/mouseTrailer/mouseTrailer";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";
import Loading from "./loading";
import AOS from "aos";
import "aos/dist/aos.css";
import AppreciationNote from "@/components/appreciationNote/appreciationNote";
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
export default function Home() {
  const [hiddenMouse, setHiddenMouse] = useState(false);
  const [hoverProject, setHoverProject] = useState(false);
  const [projectId, setProjectId] = useState(""); // Currently unused; remove if not needed
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000 }); // Adjust the duration or other settings if needed

    // Simulate page load complete
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading && projects.length === 0) {
    return <Loading />; // Replace with a proper loading component
  }

  return (
    <div className=" bg-black">
      <Header setHiddenMouse={setHiddenMouse} />
      <MouseTrailer hiddenMouse={hiddenMouse} hoverProject={hoverProject} />
      <Landing setHiddenMouse={setHiddenMouse} />
      <Projects
        setHoverProject={setHoverProject}
        setHiddenMouse={setHiddenMouse}
        projects={projects}
        setProjects={setProjects}
      />
      <Skills
        setHoverProject={setHoverProject}
        setHiddenMouse={setHiddenMouse}
      />
      <About setHiddenMouse={setHiddenMouse} />
      <AppreciationNote />
      <Footer setHiddenMouse={setHiddenMouse} />
    </div>
  );
}
