import "./Project.css"
import Button from "./Button";
import Image from "./Image";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

export default function Project({
  project: { name, description, image, live },
}) {
  return (
    <div className="project-card">
      <div className="name-description-card">
        <h1>{name}</h1>
        <p>{description}</p>
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
