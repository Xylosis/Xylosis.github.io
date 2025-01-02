import React, { useState } from "react";
import "./contact.css";

const Contact = ({darkMode}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const [submitted, setSubmitted] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Perform your form submission logic here
        console.log("Form Data Submitted:", formData);
        setSubmitted(true);
      };
    
      return (
        <div className="contact-container">

          {!submitted ? 
          (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h1 className="text" style={darkMode ? {color: "white"} : null}>Contact Me!</h1>
              <p className="text" style={darkMode ? {color: "white"} : null}>If you have any questions or just want to get in touch, feel free to drop a message below!</p>
              <label htmlFor="name"><span className="text" style={darkMode ? {color: "white"} : null}>Name</span></label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
    
              <label htmlFor="email"><span className="text" style={darkMode ? {color: "white"} : null}>Email</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
              />
    
              <label htmlFor="message"><span className="text" style={darkMode ? {color: "white"} : null}>Message</span></label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows="6"
                required
              />

              <button type="submit" className="submit-button">Send Message</button>
            </form>
          ) : (
            <div className="thank-you-message">
              <h2 className="text" style={darkMode ? {color: "white"} : null}>Thank You!</h2>
              <p className="text" style={darkMode ? {color: "white"} : null}>Your message has been sent. I'll get back to you as soon as possible.</p>
            </div>
          )}
        </div>
      );
};

export default Contact;