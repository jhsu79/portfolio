import { useState, useEffect } from "react";

function About() {
  const [about, setAbout] = useState(null);
  const getAboutData = async () => {
  const response = await fetch("./about.json");
  const data = await response.json();
    setAbout(data);
  };
  useEffect(() => { getAboutData() } , []);

  const loaded = () => (
    <div className='about'>
      <h2>{about.name}</h2>
      <img src={about.image}></img>      
      <h3>{about.email}</h3>
      <p> {about.bio}</p>
    </div>
  );
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;

