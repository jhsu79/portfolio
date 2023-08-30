import { useState, useEffect } from "react";
import Project from "../components/Project";

function Projects(props) {
  const [projects, setProjects] = useState(null);
  const getProjectsData = async () => {
    const response = await fetch("./projects.json");
    const data = await response.json();
    setProjects(data);

  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {getProjectsData()}, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return projects.map((project) => (
      <Project project={project}/>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;

