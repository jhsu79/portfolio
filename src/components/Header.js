import { Link } from "react-router-dom";

export default function Header(props) { 

    const navStyle = { 
      display: "flex",
      justifyContent: "space-around",
      border: ".2rem solid black",
      padding: ".5rem",
      width: "90%",
      margin: "auto",
    }

    return ( 
      <header>
      <h1>Joshua N Hsu</h1>
      <h2>Portfolio</h2>
      <nav style={navStyle}>
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
  