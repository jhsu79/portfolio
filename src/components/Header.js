import { Link } from "react-router-dom";

export default function Header(props) { 

    return ( 
      <header className="header">
      <h1>Joshua N Hsu</h1>
      <h2>Software Engineer</h2>
      <nav className="nav">
        <Link to="/">
          <div>HOME</div>
        </Link>
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
        <Link to="/projects">
          <div>PROJECTS</div>
        </Link>
      </nav>
    </header>
    )

    return <h1>Header</h1>;
  }
  