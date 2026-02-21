import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("about");

  const renderTab = () => {
    switch (activeTab) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="tabs">
        <button onClick={() => setActiveTab("about")}>About</button>
        <button onClick={() => setActiveTab("projects")}>Projects</button>
        <button onClick={() => setActiveTab("contact")}>Contact</button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {renderTab()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}