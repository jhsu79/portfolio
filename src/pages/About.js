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
    specialties,
    interests,
    location,
    pronouns, 
    languages,
    pronunciation,
    programming,
    frameworks,
    dbs,
    tools,
  }) => (
    <div className="About">
      <div className="image-bio-container">
        <div className='image-bio-container-background'>
        <p className="bio-container">
          <Image imageurl={imageurl} height="300" width="300" />
        
            <h3>programming languages</h3>
            <p className="card1">
            {programming.map((language, index) => (
              <div key={index} className="item">
                {language}
              </div>
            ))}</p>
            <h3>frameworks</h3>
            <p className="card1">
            {frameworks.map((framework, index) => (
              <div key={index} className="item">
                {framework}
              </div>
            ))}
            </p>
             <h3>databases and crms</h3>
             <p className="card1">
            {dbs.map((db, index) => (
              <div key={index} className="item">
                {db}
              </div>
            ))}
            </p>

             <h3>tools</h3>
             <p className="card1">
            {tools.map((db, index) => (
              <div key={index} className="item">
                {db}
              </div>
            ))}
            </p>
          </p>
        </div>
        <div>
          <p className="bio-container">
            <h3>about me</h3>
            <p className="card">{bio}</p>
            <h3>what are your strengths? </h3>
            <p className="card">{specialties}</p>
            <h3>what kind of projects do you enjoy working on?</h3>
            <p className="card">{interests}</p>
            <h3>what pronouns do I use?</h3>
            <p className="card">{pronouns}</p>
            <h3>how do I pronounce my last name?</h3>
            <p className="card">I pronounce my last name "{pronunciation}"</p>
            <h3>where am I currently based?</h3>
            <p className="card">{location}</p>
            <h3>languages spoken</h3>
            <p className="card">{languages}</p>
          </p>
        </div>
      </div>
    </div>
  );
  return about ? loaded(about) : <h1>Loading...</h1>;
}
