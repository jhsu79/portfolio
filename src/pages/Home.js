import "./Home.css";
import Button from "../components/Button.js";


function Home(props) {
  return (
    <div className="Home">
      <p><strong>I'm Joshua Hsu</strong> </p>
      <p>A <strong>software engineer</strong>, an <strong>educator</strong>, and a <strong>storyteller</strong> </p>
      <br></br>
      <p>What <strong>story</strong> do you want to <strong>tell?</strong></p>
      <p>What do you want to <strong>learn?</strong></p>
      <p>Let's <strong>explore</strong> all the ways we can <strong>build</strong> something together! </p>
      <br></br>
      <div className='links'> 
      <Button className="Button" linktext="Learn More About Me" url="/about" />
      <Button className="Button" linktext="Learn More about My Projects" url="/projects" />
      </div>
    </div>
  );
}

export default Home;
