import { useRef } from "react";
import { useParams } from "react-router-dom";
import projectsData from "../data/projects.json";
import { findProject, toKebabCase } from "../helpers/Functions.js";
import { useMouse } from "react-use";

import "../assets/css/_reset.css";
import "../assets/css/fonts.css";
import "../assets/css/style.css";

import Watermark from "../components/Watermark.js";

const Project = () => {
  const ref = useRef(null);
  const { docX, docY } = useMouse(ref);

  const ratio = 100;
  const mouseX = 1 - (docX / window.innerWidth) * ratio;
  const mouseY = 1 - (docY / window.innerHeight) * ratio - 50;
  const { projectId } = useParams();

  const project = findProject(projectId);

  return (
    <div className="project">
      <h2>{project.title}</h2>
      <p>{project.desc}</p>
      <div>
        {project.images.map((image, index) => (
          <img key={toKebabCase(project.title) + `-${index + 1}`} src={image} />
        ))}
      </div>
    </div>
  );
};

export default Project;
