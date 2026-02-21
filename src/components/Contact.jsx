import SectionWrapper from "./SectionWrapper";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import vkImg from "../assets/logo vk.png";

export default function Contact() {
  return (
    <SectionWrapper>
      <img src={vkImg} alt="Vishwa Kaushal Logo" className="hero-logo" width="250" height="150"/>
      <h2 className="neon-text">Contact</h2>
      <p>Let’s build something powerful together.</p>

      <div className="socials">
        <a href="https://github.com/vishwa-kaushal-vk" target="_blank">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/vishwa-kaushal/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="mailto:vishwakaushalkk@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </SectionWrapper>
  );
}