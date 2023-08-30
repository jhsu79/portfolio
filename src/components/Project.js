import Button from "./Button";
import Image from "./Image";
import "./project.css"
export default function Project({
  project: { name, description, image, git, live },
}) {
  return (
    <div className="Project">
      <h1>{name}</h1>
      <Image imageurl={image} height="400" width="800" />
      <p>{description}</p>
      <div className="project-button">
        <Button linktext="GitHub" url={git} />
        <Button linktext="Live Site" url={live} />
      </div>
    </div>
  );
}
