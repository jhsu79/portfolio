import "./Contact.css";
import Input from "../components/Input.js";
import { useState } from "react";
import "../components/Button.css";
import "./About.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData)


  }

  return (
    <div className="Contact">
      <p className="text"> how can we work together? </p>
      <div className="card">
        <form id="contact-form" onSubmit={handleSubmit} method="POST">
          <Input
            label="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            label='e-mail'
            type="email"
            name="e-mail"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            label="your message"
            name="message"
            type="text-area"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit" className="Button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
