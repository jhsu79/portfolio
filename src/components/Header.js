import "./Header.css";
import Button from "./Button";
export default function Header(props) {
  return (
    <header className="header">
      <div className="title">
        <h1>Joshua N Hsu</h1>
        <h2>Software Engineer</h2>
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
