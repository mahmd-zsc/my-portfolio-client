"use client";
import { useState, useEffect } from "react";
import About from "@/components/about/about";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Landing from "@/components/landing/landing";
import Message from "@/components/message/message";
import MouseTrailer from "@/components/mouseTrailer/mouseTrailer";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";
import Loading from "./loading";

export default function Home() {
  let [hiddenMouse, setHiddenMouse] = useState(false);
  let [hoverProject, setHoverProject] = useState(false);
  let [projectId, setProjectId] = useState("");
  let [isLoading, setIsLoading] = useState(true);

  // Use effect to check when the page is fully loaded
  useEffect(() => {
    // Set a timeout to simulate page load complete (adjust time as needed)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />; // Replace with a proper loading component
  }

  return (
    <div>
      <Header setHiddenMouse={setHiddenMouse} />
      <MouseTrailer hiddenMouse={hiddenMouse} hoverProject={hoverProject} />
 
      <Landing setHiddenMouse={setHiddenMouse} />
      <Projects
        setHoverProject={setHoverProject}
        setHiddenMouse={setHiddenMouse}
      />
      <Skills
        setHoverProject={setHoverProject}
        setHiddenMouse={setHiddenMouse}
      />
      <About setHiddenMouse={setHiddenMouse} />
      <Message />
      <Footer setHiddenMouse={setHiddenMouse} />
    </div>
  );
}
