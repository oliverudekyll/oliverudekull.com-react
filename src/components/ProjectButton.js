import { useState, useRef, useEffect } from "react";
import { motion, animate, stagger } from "framer-motion";

import { toKebabCase } from "../helpers/Functions.js";

export function StateIcon({ isOpen }) {
  return (
    <div className="project__state-icon">
      <div className="state-icon__stem"></div>
      <div
        className={`state-icon__stem ${isOpen ? "vertical--open" : "vertical"}`}
      ></div>
    </div>
  );
}

const formatOrder = (index) => {
  return String(index + 1).padStart(3, "0");
};

function ProjectContents({ title, index, isOpen }) {
  return (
    <>
      <div className="project__order">
        <StateIcon isOpen={isOpen} />
        {formatOrder(index)}
      </div>
      <h2
        className="project__title"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h2>
    </>
  );
}

const initialValue = {
  opacity: 0,
  y: "-100%",
  filter: "blur(0px)",
};

function Project({ title, url, index, mouseX, mouseY }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    if (!url) {
      setIsOpen((prevState) => !prevState);
    }
  }

  useEffect(() => {
    const staggerDelay = stagger(0.06);
    const translateAmount = "0%";
    setTimeout(() => {
      animate(
        "a",
        { opacity: 1, y: translateAmount, filter: "blur(0px)" },
        { delay: staggerDelay }
      );
    }, 100);
  }, []);

  const id = toKebabCase(title);

  return (
    <>
      <motion.a
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        initial={initialValue}
        style={{
          backgroundPosition: `${mouseX}px ${mouseY}px`,
        }}
        href={url ? url : `projects/${id}`}
        className="feed__project"
        id={id}
        onClick={handleClick}
      >
        <ProjectContents title={title} index={index} isOpen={isOpen} />
      </motion.a>
    </>
  );
}
export default Project;
