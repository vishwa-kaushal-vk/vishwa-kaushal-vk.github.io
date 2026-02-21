import { motion } from "framer-motion";

export default function Hero({ goNext }) {
  return (
    <section>
      
      <motion.h1
        className="neon-text"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Melow
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Developer • Engineering • Intelligent Systems
      </motion.p>

      <motion.button
        className="hero-btn glow-hover"
        onClick={goNext}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore
      </motion.button>
    </section>
  );
}