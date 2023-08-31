import { useState, useEffect } from "react";
import Image from "../components/Image";
import "./About.css";

export default function About() {
  const [about, setAbout] = useState(null);
  const getAboutData = async () => {
    const response = await fetch("./about.json");
    const data = await response.json();
    setAbout(data);
  };
  useEffect(() => {
    getAboutData();
  }, []);

  const loaded = ({ imageurl, email, bio, interests, location }) => (
    <div className="About">
      <div className="image-bio-container">
        <Image imageurl={imageurl} height="400" width="400" />
        <div>
          <p className="bio-container">
            <h2>about me</h2>
            <p className="bio">{bio}</p>
            <h2>interests</h2>
            <p className="bio">{interests}</p>
            <h2>location</h2>
            <p className="bio">{location}</p>
          </p>
        </div>
      </div>
      <h3>Want to talk more? {email}</h3>
    </div>
  );
  return about ? loaded(about) : <h1>Loading...</h1>;
}
