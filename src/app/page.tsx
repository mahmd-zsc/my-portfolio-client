"use client";
import About from "@/components/about/about";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Landing from "@/components/landing/landing";
import Message from "@/components/message/message";
import MouseTrailer from "@/components/mouseTrailer/mouseTrailer";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";
import { useState } from "react";
export default function Home() {
  let [hiddenMouse, setHiddenMouse] = useState(false);
  let [hoverProject, setHoverProject] = useState(false);
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
