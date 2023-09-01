import "./project.css"

import Button from "./Button";
import Image from "./Image";
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'


export default function Project({
  project: { name, description, image, git, live },
}) {
  return (
    <div className="Project">
      <h1>{name}</h1>
      <Image imageurl={image} height="400" width="800" />
      <p>{description}</p>
      <div className="project-button">
       <Button url="https://github.com/jhsu79" icon={faSquareGithub} />
        <Button linktext="Live Site" url={live} />
      </div>
    </div>
  );
}
