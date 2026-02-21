import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  "> Initializing system...",
  "> Loading modules...",
  "> Establishing secure connection...",
  "> Identity verified.",
  "> Welcome, Melow.",
];

export default function Intro({ onFinish }) {
  const [displayed, setDisplayed] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < lines.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => [...prev, lines[lineIndex]]);
        setLineIndex((i) => i + 1);
      }, 700);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(onFinish, 1200);
    }
  }, [lineIndex, onFinish]);

  return (
    <motion.div
      className="intro"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="terminal">
        {displayed.map((line, i) => (
          <div key={i} className="terminal-line">
            {line}
          </div>
        ))}
        <div className="cursor">█</div>
      </div>
    </motion.div>
  );
}