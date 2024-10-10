import React from "react";
// import { useState } from "react";
import "./style.css";

export default function ContactUs() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here (e.g., send to an API or email)
  //   console.log("Form submitted:", formData);
  //   setFormData({ name: "", email: "", message: "" }); // Clear form after submission
  // };

  return (
    <div>
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>If you need help or want to learn more, reach out to us anytime.</p>
        <p>Email: support@serenify.com</p>
        <p>Phone: (555) 123-4567</p>
        <div className="social-media">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </section>
    </div>
  );
}
