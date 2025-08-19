import { useEffect } from 'react';
import './Footer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={`${process.env.PUBLIC_URL}/Img/kingLogo.png`} alt="Sunshine EMS" className="footer-logo" />
          <h3>Sunshine EMS</h3>
          <p>Streamlining Employee Data Management with Simplicity and Speed.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/register">Login</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: support@sunshineems.com</p>
          <p>Phone: +91 75592 87352</p>
          <p>Location: Pune, India</p>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/Svg/facebook.webp`} alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/Svg/Twiter.webp`} alt="Twitter" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/Svg/linkedin.webp`} alt="LinkedIn" />
            </a>  
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/Svg/Instagram.webp`} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sunshine EMS. All rights reserved.</p>
      </div>
    </footer>
  );
}
