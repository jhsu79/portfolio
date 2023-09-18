import "./Contact.css";
import Input from "../components/Input.js"
import { useState } from "react";
import "../components/Button.css"
import "./About.css"


export default function Contact() {
  const [name, setName]= useState("")
  const [email, setEmail]= useState("")
  const [message, setMessage]= useState("")

  function handleNameChange(e){
    setName(e.target.value)
  }
  function handleEmailChange(e){
    setEmail(e.target.value) 
  }
  function handleMessageChange(e){
    setMessage(e.target.value) 
  }
  function handleSubmit(e){
    //Insert handlesubmit logic here. 
  }

  return (
    <div className="Contact">
        <p className='text'> how can we work together? </p>
      <div className="card">
     
      <form id ="contact-form" onSubmit={handleSubmit} method="POST">
        <Input label="name" type="text" value={name} onChange={handleNameChange} />
        <Input type="email" label='your e-mail' value={email} onChange={handleEmailChange}/>
        <Input label='your message' type='text-area' value={message} onChange={handleMessageChange}/>
        <button type="submit" className="Button">Send</button> 
      </form>
      </div>
    </div>
  );
}
