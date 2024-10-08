import { useEffect, useRef } from "react";
import ScrollAnimation from "react-animate-on-scroll";

import "animate.css/animate.compat.css";

import Project from "./Project.js";

function Feed({ mouseX, mouseY }) {
  const projects = [
    {
      title: "Elementary",
      id: 1,
      desc: "",
      images: [],
    },
    {
      title: "Thru the&nbsp;Motions",
      id: 2,
      desc: "",
      images: [],
    },
    {
      title: "Chants for&nbsp;Recognition",
      id: 3,
      desc: "",
      images: [],
    },
    {
      title: "Erik Merisalu",
      id: 4,
      desc: "",
      images: [],
      url: "http://www.erikmerisalu.com/",
    },
    {
      title: "Inklingroom",
      id: 5,
      desc: "",
      images: [],
    },
    {
      title: "Woman Sitting at the&nbsp;Machine (Thinking)",
      id: 6,
      desc: "",
      images: [],
    },
    {
      title: "If This Be&nbsp;Not&nbsp;I",
      id: 7,
      desc: "",
      images: [],
    },
    {
      title: "So Called Neutral",
      id: 8,
      desc: "",
      images: [],
      url: "https://socalledneutral.oliverudekull.com/",
    },
    {
      title: "Float",
      id: 9,
      desc: "",
      images: [],
    },
    {
      title: "Markus Laanisto",
      id: 10,
      desc: "",
      images: [],
    },
    {
      title: "Paavli Kultuurivabrik",
      id: 11,
      desc: "",
      images: [],
    },
    {
      title: "Dharma Doom",
      id: 12,
      desc: "",
      images: [],
    },
    {
      title: "The Last Dusk Always Reaches the&nbsp;First&nbsp;Dawn",
      id: 13,
      desc: "",
      images: [],
    },
  ];

  return (
    <ScrollAnimation animateIn="fadeInUp" duration=".6">
      <main className="feed">
        {projects
          .slice()
          .reverse()
          .map((project, i) => (
            <Project
              key={projects.id}
              i={i}
              title={project.title}
              mouseX={mouseX}
              mouseY={mouseY}
              {...(project.hasOwnProperty("url") ? { url: project.url } : {})}
            />
          ))}
      </main>
    </ScrollAnimation>
  );
}

export default Feed;
