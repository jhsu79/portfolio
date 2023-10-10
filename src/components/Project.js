import "./Project.css"
import Button from "./Button";
import Image from "./Image";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

export default function Project({
  project: { name, description, role1, role2, tech, image, live },
}) {
  return (
    <div className="project-card">
      <div className="name-description-card">
        <h1><strong>{name}</strong></h1>
        <br></br>
        <p>{description}</p> 
        <br></br>
        <li> {role1}</li>
        <li> {role2}</li>
        <br></br>
        <h4 ><strong>Technologies Used:</strong>
        <p className="tech" >
  {tech.map((tech, index) => (
    <div key={index} className="item">
      {tech}
    </div>
  ))}
</p>
</h4>
        <br></br>
        <div className="project-buttons">
          <Button linktext="GitHub " url="https://github.com/jhsu79" icon={faSquareGithub} />
          <Button linktext="Live Site" url={live} />
        </div>
        
      </div>
      <div className="image-card">
      <Image imageurl={image} height="400" width="600" />
      </div>
    </div>
  );
}
