"use client";
import About from "@/components/about/about";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Landing from "@/components/landing/landing";
import Message from "@/components/message/message";
import MouseTrailer from "@/components/mouseTrailer/mouseTrailer";
import ProjectSide from "@/components/projectSide/projectSide";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";
import { useState } from "react";
export default function Home() {
  let [hiddenMouse, setHiddenMouse] = useState(false);
  let [hoverProject, setHoverProject] = useState(false);
  let [projectSide, setProjectSide] = useState(false);
  return (
    <div>
      <Header setHiddenMouse={setHiddenMouse} />
      <MouseTrailer hiddenMouse={hiddenMouse} hoverProject={hoverProject} />

      <ProjectSide projectSide={projectSide} setProjectSide={setProjectSide} />

      <Landing setHiddenMouse={setHiddenMouse} />
      <Projects
        setHoverProject={setHoverProject}
        setHiddenMouse={setHiddenMouse}
        setProjectSide={setProjectSide}
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
