import { useParams } from "react-router-dom";
import projectsData from "../data/projects.json";

const Project = () => {
  const { teamId } = useParams();
  const findProject = (id) => {
    return projectsData.find((project) => project.id === id);
  };

  const project = findProject(teamId);

  return (
    <div className="project">
      <h2>{project.title}</h2>
      <p>Project Description</p>
    </div>
  );
};

export default Project;
