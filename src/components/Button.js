import { Link } from "react-router-dom";
import "./Button.css"
export default function Button(props) {
  return (
    <div className="Button">
      <Link to={props.url} >
        {props.linktext}
      </Link>
    </div>
  );
}
