import "./Header.css";
import Button from "./Button";
import { faHouse } from "@fortawesome/free-solid-svg-icons"
export default function Header(props) {
  return (
    <header className="header">
      <div className="title">
        <h1 className='name'>JOSHUA N HSU</h1>
        <h2> software engineer | educator | storyteller </h2>
      </div>
      <nav className="Nav">
        <Button icon={faHouse} url="/" />
        <Button linktext="About" url="/about" />
        <Button linktext="Projects" url="/projects" />
      </nav>
    </header>
  );

  return <h1>Header</h1>;
}
