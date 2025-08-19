import React, { useState } from 'react';
import './Contact.css';
import Lottie from 'lottie-react';
import support from './support.json'; // Ensure you have the correct path to your Lottie animation file
// import { s } from 'framer-motion/client';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="contact-container py-5 w-100">
      <h2 className="contact-heading" data-aos="fade-down">Contact Us</h2>

      <div className="container-fluid px-3 px-md-5">
        <div className="row contact-grid mb-4" data-aos="zoom-in">
          <div className="col-md-6 d-flex justify-content-center align-items-center p-4" data-aos="fade-right">
            <Lottie animationData={support} loop={true} className="contact-animation" />
          </div>

          <div className="col-md-6 p-4" data-aos="fade-left">
            <form onSubmit={handleSubmit} className="contact-form">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />

              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />

              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />

              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                rows="4"
                required
              ></textarea>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>

<div className='row contact-info d-flex justify-content-between' data-aos="fade-up">
  <div className="col-md-6 info-card" data-aos="fade-right">
    <h4>Contact Info</h4>
    <p><strong>📍 Address:</strong> Royal Plaza, Dhankawdi, Pune</p>
    <p><strong>📞 Phone:</strong> +91-7559287352</p>
    <p><strong>✉️ Email:</strong> surajbhokare73@gmail.com</p>
    <p><strong>⏰ Hours:</strong> Mon–Fri (7 AM - 7 PM)</p>
  </div>

  <div className="col-md-6 info-card" data-aos="fade-left">
    <h4>Google Map</h4>
    <iframe
      title="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4380888658574!2d73.84953921436756!3d18.506399774065464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0156c04a7ff%3A0x6d0a6c4bb0c3a21c!2sDhankawadi%2C%20Pune%2C%20Maharashtra%20411043!5e0!3m2!1sen!2sin!4v1622900999172!5m2!1sen!2sin"
      width="100%"
      height="250"
      style={{ border: 0, borderRadius: '15px' }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>
</div>


          <div className="text-center mt-5 p-4 connect-section rounded shadow" style={{ background: '#f3f5ff' }} data-aos="zoom-in-up">
            <h3 className='heading mb-3'>Connect with Us</h3>
            <p className="text-muted mb-4">Follow us on social media to stay updated with latest news, updates, and more.</p>

            <div className="d-flex flex-wrap justify-content-center gap-4 fs-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary social-icon">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-info social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-danger social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-danger social-icon">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-dark social-icon">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
  );
}
