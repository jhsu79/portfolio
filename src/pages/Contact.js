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
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3002/send', {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });
  
      const responseData = await response.json();
  
      if (responseData.status === 'success') {
        alert("Message Sent.");
        // Reset the form if needed
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else if (responseData.status === 'fail') {
        alert("Message failed to send.");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("An error occurred while sending the message.");
    }
  };
  
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
