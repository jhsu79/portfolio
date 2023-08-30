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

  const loaded = ({name, imageurl, email, bio}) => (
    <div className='About'>
      <h2>About Me</h2>
      <div className='image-bio'>
      <Image imageurl={imageurl} height="300" width="300" />
      <p> {bio}</p>
      </div>
      <h3>Want to talk more? {email}</h3>
      
    </div>
  );
  return about ? loaded(about) : <h1>Loading...</h1>;
}

