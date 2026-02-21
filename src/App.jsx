import { useState } from "react";
import Intro from "./components/Intro";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import TechBackground from "./components/TechBackground";
import CursorGlow from "./components/CursorGlow";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [page, setPage] = useState("home");

  if (showIntro) {
    return <Intro onFinish={() => setShowIntro(false)} />;
  }

  return (
    <>
      <TechBackground />
      <CursorGlow />
      <Navigation page={page} setPage={setPage} />

      {page === "home" && <Hero goNext={() => setPage("about")} />}
      {page === "about" && <About />}
      {page === "projects" && <Projects />}
      {page === "contact" && <Contact />}
    </>
  );
}