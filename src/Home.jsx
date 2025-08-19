import React, { useEffect } from 'react';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Newsletter from './Newsletter';
import { motion } from 'framer-motion';
import './Home.css';
import Footer from './Footer';
// import { Player } from '@lottiefiles/react-lottie-player';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // reset scroll on mount
  }, []);

  return (
    <div className="home-container animate fadeIn">
      {/* === Background Video === */}
      <div className="video-banner">
        <video autoPlay muted loop className="bg-video">
          <source src={`${process.env.PUBLIC_URL}/Svg/homeVideo.mp4`} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="video-overlay">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="video-content"
          >
            <h1>Welcome to <span>Sunshine EMS</span></h1>
            <p>
              Manage employees, track leave, assign roles, and monitor progress — all in one place.
            </p>
          </motion.div>
        </div>
      </div>

      {/* === Animated Sections === */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <About />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Service />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Newsletter />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Contact />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Footer />
      </motion.div>
    
    </div>
  );
}
