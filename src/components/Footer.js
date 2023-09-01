import "./Footer.css";
import Button from "./Button";
import Icon from "./Icon"
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import DownloadButton from "./DownloadButton";

export default function Footer() {
  return (
   <div className= "Footer">
    <nav className="Nav">
      <Button url="https://www.linkedin.com/in/joshuanhsu" icon={faLinkedin} />
      <Button url="https://github.com/jhsu79" icon={faSquareGithub} />
      <DownloadButton linktext="Download My Resume" url="%PUBLIC_URL%/jhresumewebv.pdf" />
    </nav>
   
    </div> 
  );
}
