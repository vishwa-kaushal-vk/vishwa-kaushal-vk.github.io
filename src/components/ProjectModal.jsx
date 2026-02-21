import { motion } from "framer-motion";

export default function ProjectModal({ project, close }) {
  return (
    <motion.div className="modal-bg" onClick={close}>
      <motion.div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>{project.title}</h2>
        <p>{project.desc}</p>
        <p>
          <strong>Tech:</strong> {project.tech}
        </p>

        <div className="modal-actions">
          <a href={project.github} target="_blank">GitHub</a>
          <a href={project.live} target="_blank">Live Demo</a>
        </div>
      </motion.div>
    </motion.div>
  );
}