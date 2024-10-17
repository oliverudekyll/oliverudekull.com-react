import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const Project = () => {
  const project = useLoaderData();

  return (
    <div className="project">
      <h2>{project.title}</h2>
      <div>
        {project.images.map((image) => (
          <img key={image} src={image} alt={project.title} />
        ))}
      </div>
    </div>
  );
};

export default Project;
