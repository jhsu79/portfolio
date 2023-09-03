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

  const loaded = ({
    imageurl,
    bio,
    interests,
    location,
    languages,
    pronunciation,
    programming,
    frameworks,
    tools,
  }) => (
    <div className="About">
      <div className="image-bio-container">
        <div>
        <p className="bio-container">
          <Image imageurl={imageurl} height="300" width="300" />
        
            <h2>programming languages</h2>
            <p className="bio">{programming}</p>
            <h2>frameworks</h2>
            <p className="bio">{frameworks}</p>
            <h2>tools</h2>
            <p className="bio">{tools}</p>
          </p>
        </div>
        <div>
          <p className="bio-container">
            <h2>about me</h2>
            <p className="bio">{bio}</p>
            <h2>interests</h2>
            <p className="bio">{interests}</p>
            <h2>how do I pronounce my last name?</h2>
            <p className="bio">I pronounce my last name "{pronunciation}"</p>
            <h2>location</h2>
            <p className="bio">{location}</p>
            <h2>languages spoken</h2>
            <p className="bio">{languages}</p>
          </p>
        </div>
      </div>
    </div>
  );
  return about ? loaded(about) : <h1>Loading...</h1>;
}
