import { useRef } from "react";
import { useMouse } from "react-use";

import Project from "./Project.js";

function Feed() {
  const ref = useRef(null);
  const { docX, docY, posX, posY, elX, elY, elW, elH } = useMouse(ref);

  const projects = [
    {
      title: "Float",
    },
    {
      title: "So Called Neutral",
      url: "https://socalledneutral.oliverudekull.com/",
    },
    {
      title: "If This Be Not I",
    },
    {
      title: "Woman Sitting at the Machine (Thinking)",
    },
    {
      title: "Inklingroom",
    },
    {
      title: "Erik Merisalu",
      url: "http://www.erikmerisalu.com/",
    },
    {
      title: "Chants for Recognition",
    },
    {
      title: "Thru the Motions",
    },
    {
      title: "Elementary",
    },
  ];
  return (
    <main ref={ref} className="feed">
      {projects.map((project, i) => (
        <Project
          key={i}
          i={i}
          title={project.title}
          docX={docX}
          docY={docY}
          {...(project.hasOwnProperty("url") ? { url: project.url } : {})}
        />
      ))}
    </main>
  );
}

export default Feed;