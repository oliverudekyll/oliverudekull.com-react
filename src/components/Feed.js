import { useEffect, useRef } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {
  motion,
  cubicBezier,
  easeInOut,
  backInOut,
  circInOut,
  anticipate,
  linear,
  steps,
} from "framer-motion";

import "animate.css/animate.compat.css";

import Project from "./Project.js";
import projectsData from "../data/projects.json";
import { toKebabCase } from "../helpers/Functions.js";

function Feed({ mouseX, mouseY, initial, animate, transition }) {
  return (
    <motion.main
      className="feed"
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {projectsData
        .slice()
        .reverse()
        .map((project, index) => {
          return (
            <Project
              key={toKebabCase(project.title)}
              index={index}
              title={project.title}
              mouseX={mouseX}
              mouseY={mouseY}
              {...(project.hasOwnProperty("url") ? { url: project.url } : {})}
            />
          );
        })}
    </motion.main>
  );
}

export default Feed;
