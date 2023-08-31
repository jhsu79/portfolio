import "./Header.css";
import Button from "./Button";
export default function Header(props) {
  return (
    <header className="header">
      <div className="title">
        <h1>JOSHUA N HSU</h1>
        <h2> software engineer >> educator >> artist </h2>
      </div>
      <nav className="Nav">
        <Button linktext="Home" url="/" />
        <Button linktext="About" url="/about" />
        <Button linktext="Projects" url="/projects" />
      </nav>
    </header>
  );

  return <h1>Header</h1>;
}
