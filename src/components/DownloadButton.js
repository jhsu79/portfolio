import "./Button.css"
import Icon from "./Icon"

export default function DownloadButton(props) {
  return (
    <div className="Button">
        <a href={props.url} download>
        {props.linktext ? props.linktext : null }
        {props.icon ? <Icon icon={props.icon}/> : null }
        </a>
    </div>
  );
}