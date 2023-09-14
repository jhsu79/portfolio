import "./Footer.css";
import Button from "./Button";
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import DownloadButton from "./DownloadButton";
import Resume from "../assets/jhwebresumewebv2.pdf"

export default function Footer() {
  return (
   <div className= "Footer">
    <Button url="/contact" icon={faEnvelope} />
    <nav className="Nav">
      <Button url="https://www.linkedin.com/in/joshuanhsu" icon={faLinkedin} />
      <Button url="https://github.com/jhsu79" icon={faSquareGithub} />
      <DownloadButton linktext="Download My Resume" url={Resume} filename="Joshua-N-Hsu.pdf" />
    </nav>
   
    </div> 
  );
}
