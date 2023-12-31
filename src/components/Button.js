import { Link } from "react-router-dom";
import "./Button.css"
import Icon from "./Icon"

export default function Button(props) {
  return (
    <div className="Button">
      <Link to={props.url} >
        {props.linktext ? props.linktext : null }
        {props.icon ? <Icon icon={props.icon}/> : null }
      </Link>
    </div>
  );
}
