import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import ProjectModal from "./ProjectModal";

import droneImg from "../assets/drone.png";
import roomImg from "../assets/automation.png";
import botImg from "../assets/bot.png";
import aiImg from "../assets/ai.png";
import bsImg from "../assets/bssys.png";
import ptImg from "../assets/ptweb.png";
import pcappImg from "../assets/pcapp.png";



/* 1️⃣ PROJECT DATA (example content) */
const projects = [
  {
    title: "Intelligent Drone System",
    tech: "Embedded Systems • Navigation • Payload",
    desc:
      "Designed a smart drone capable of autonomous navigation, payload handling, and system stability.",
      image: droneImg,
  },
  {
    title: "Smart Room Automation",
    tech: "ESP32 • IoT • Mobile Control",
    desc:
      "Built a complete room automation system with mobile app control, lighting scenes, and power optimization.",
      image: roomImg,
  },
  {
    title: "Secure WhatsApp Bot",
    tech: "Node.js • Automation • Security",
    desc:
      "Developed a multi-user WhatsApp bot with session handling, role control, and command-level security.",
      image: botImg,
    github: "https://github.com/vishwa-kaushal-vk/wabot-aq",
    live: "https://github.com/vishwa-kaushal-vk/cyberbotweb",
  },
  {
    title: "AI Web Platform",
    tech: "React • AI Integration • UX",
    desc:
      "Created an AI-assisted web platform focusing on performance, usability, and intelligent workflows.",
      image: aiImg,
    github: "https://github.com/vishwa-kaushal-vk/web-template.github.io",
    live: "#",
  },
  {
    title: "Business System Software",
    tech: "React • Business • UX",
    desc:
      "Created a comprehensive business system software with invoice system, Quotation system, Stock management, user management, data analytics, and intelligent workflows.",
      image: bsImg,
  },
  {
    title: "Industrial Printer Troubleshooting App",
    tech: "Mobile • Industrial IoT • Customer Support",
    desc:
      "A comprehensive mobile application for customers to troubleshoot industrial printer issues with error code analysis and step-by-step guides.",
      image: pcappImg,
    github: "https://github.com/vishwa-kaushal-vk/Printer-Care-Pro",

  },
  {
    title: "PrintTeach Web Platform",
    tech: "Html • Business • Printing Technology",
    desc:
      "A modern web platform for businesses to earn customers and the latest advancements in printing technology.",
      image: ptImg,
    github: "https://github.com/vishwa-kaushal-vk/printteach.github.io",

    live: "https://printteach.lk/",
  },
  
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <SectionWrapper>
      <h2 className="neon-text">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            onClick={() => setSelectedProject(project)}
            whileHover={{ scale: 1.04 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-title">{project.title}</div>
            <div className="project-tech">{project.tech}</div>
            <div className="project-desc">{project.desc}</div>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          close={() => setSelectedProject(null)}
        />
      )}
    </SectionWrapper>
  );
}