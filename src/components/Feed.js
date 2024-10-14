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

function Feed({ mouseX, mouseY, initial, animate, transition }) {
  const projects = [
    {
      title: "Elementary",

      desc: "",
      images: [],
    },
    {
      title: "Thru the&nbsp;Motions",

      desc: "",
      images: [],
    },
    {
      title: "Chants for&nbsp;Recognition",

      desc: "",
      images: [],
    },
    {
      title: "Erik Merisalu",

      desc: "",
      images: [],
      url: "http://www.erikmerisalu.com/",
    },
    {
      title: "Inklingroom",

      desc: "",
      images: [],
    },
    {
      title: "Woman Sitting at the&nbsp;Machine (Thinking)",

      desc: "",
      images: [],
    },
    {
      title: "If This Be&nbsp;Not&nbsp;I",

      desc: "",
      images: [],
    },
    {
      title: "So Called Neutral",

      desc: "",
      images: [],
      url: "https://socalledneutral.oliverudekull.com/",
    },
    {
      title: "Float",

      desc: "",
      images: [],
    },
    {
      title: "Markus Laanisto",

      desc: "",
      images: [],
    },
    {
      title: "Paavli Kultuurivabrik",

      desc: "",
      images: [],
    },
    {
      title: "Dharma Doom",

      desc: "",
      images: [],
    },
    {
      title: "The Last Dusk Always Reaches the&nbsp;First&nbsp;Dawn",

      desc: "",
      images: [],
    },
  ];

  return (
    <motion.main
      className="feed"
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {projects
        .slice()
        .reverse()
        .map((project, i) => (
          <Project
            key={project.title.split(" ").join("-").toLowerCase()}
            id={project.title.split(" ").join("-").toLowerCase()}
            i={i}
            title={project.title}
            mouseX={mouseX}
            mouseY={mouseY}
            {...(project.hasOwnProperty("url") ? { url: project.url } : {})}
          />
        ))}
    </motion.main>
  );
}

export default Feed;
