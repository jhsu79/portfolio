import { useState, useEffect } from "react";
import Image from "../components/Image";
import './About.css'

export default function About() {
  const [about, setAbout] = useState(null);
  const getAboutData = async () => {
  const response = await fetch("./about.json");
  const data = await response.json();
    setAbout(data);
  };
  useEffect(() => { getAboutData() } , []);

  const loaded = ({name, imageurl, email, bio, welcometext, current}) => (
    <div className='About'>
     
      <div className='image-bio-container'>
      <Image imageurl={imageurl} height="300" width="300" />
      <div> 
      <p className='bio-container'><h2>about me</h2><p className='bio'>{welcometext}{bio}{current}</p></p></div>
      
      </div>
      <h3>Want to talk more? {email}</h3>
      
    </div>
  );
  return about ? loaded(about) : <h1>Loading...</h1>;
}

