import React from "react";
import "./contact.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling contact form submission here
    console.log(formData); // Replace this with your own logic

    // Assuming the form submission was successful, you can navigate to a success page or homepage
    navigate("/");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleContactSubmit}>

        <label>Name</label>
        <input
          className="input-field"
          onChange={handleChange}
          value={formData?.name}
          name="name"
          placeholder="Enter your Name..."
        />
        
        <label>Email</label>
        <input
          className="input-field"
          onChange={handleChange}
          value={formData?.email}
          name="email"
          placeholder="Enter your Email..."
        />
        <label>Message</label>
        <textarea
          className="input-field"
          onChange={handleChange}
          value={formData?.message}
          name="message"
          placeholder="Enter your Message..."
        />
        <button className="contact-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
