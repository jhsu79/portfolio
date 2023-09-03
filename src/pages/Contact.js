import "./Contact.css";
import Input from '../components/Input.js'
import "../components/Button.css"
import "./About.css"
export default function Contact() {
  return (
    <div className="Contact">
      <div className="card">
      <form>
        <Input label='name' />
        <Input label='your e-mail'/>
        <Input label='your message' type='text-area'/>
        <button type="submit" className="Button">Send</button> 
      </form>
      </div>
      <p className='text'> how can we work together? </p>
    </div>
  );
}
