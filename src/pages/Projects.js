import { useState, useEffect } from "react";
import Project from "../components/Project";

function Projects(props) {
  const [projects, setProjects] = useState(null);
  const getProjectsData = async () => {
    const response = await fetch("./projects.json");
    const data = await response.json();
    setProjects(data);

  };

  useEffect(() => {getProjectsData()}, []);

  const loaded = () => {
    return projects.map((project, index) => (
      <Project project={project} key={`${project.name}-${index}`}/>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;

