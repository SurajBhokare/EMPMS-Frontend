import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';
import coding from './animations/coding.json';
import teamwork from './animations/teamwork.json';
import mission from './animations/mission.json';
import './About.css';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="about-section  py-5 animate fadeIn">
      <div className="container ">
        <div className="intro" data-aos="fade-down">
          <h2>About <span>SunShine Pvt Ltd</span></h2>
          <p>Empowering the next generation of developers with real-world IT experience.</p>
        </div>

        <div className="project-summary bg-white rounded p-4 shadow mb-5" data-aos="fade-up">
          <h3 className="text-center mb-3">Employee Management System Project</h3>
          <p>
            Our <strong>Employee Management System</strong> is a core in-house project designed to simulate real industry-grade applications. 
            Built using <strong>Spring Boot (Backend)</strong>, <strong>ReactJS (Frontend)</strong>, and <strong>MySQL (Database)</strong>, this system manages employee data, roles, leaves, authentication, and much more.
          </p>
          <p>
            The project offers practical exposure to:
            <ul>
              <li>CRUD operations with full-stack integration</li>
              <li>Role-based access and navigation (Admin & Employee)</li>
              <li>Form validations, secure login, and registration</li>
              <li>Leave management workflows with status updates</li>
              <li>RESTful APIs and MVC architecture</li>
            </ul>
          </p>
          <p>
            This project acts as both a learning tool and a portfolio piece, reflecting our commitment to teaching modern development workflows using industry tools.
          </p>
        </div>

        <div className="cards-grid container">
          <div className="card mission" data-aos="zoom-in">
            <div className="icon-wrapper">
              <svg className="svg-icon" viewBox="0 0 64 64">
                <polyline points="16,32 28,44 48,20" stroke="#FFD700" strokeWidth="4" fill="none" />
              </svg>
            </div>
            <Lottie className="lottie" animationData={mission} loop autoplay />
            <h3>Mission</h3>
            <p>To bridge the gap between education and enterprise-grade development skills.</p>
          </div>

          <div className="card coding" data-aos="zoom-in">
            <div className="icon-wrapper">
              <svg className="svg-icon" viewBox="0 0 64 64">
                <path d="M40 16 L24 48 M24 16 L40 48" stroke="#00BFFF" strokeWidth="4" />
              </svg>
            </div>
            <Lottie className="lottie" animationData={coding} loop autoplay />
            <h3>Vision</h3>
            <p className='para'>To make fresh graduates job-ready through immersive project-based training.</p>
          </div>

          <div className="card teamwork" data-aos="zoom-in">
            <div className="icon-wrapper">
              <svg className="svg-icon" viewBox="0 0 64 64">
                <circle cx="20" cy="24" r="6" fill="#32CD32" />
                <circle cx="44" cy="24" r="6" fill="#32CD32" />
                <circle cx="32" cy="44" r="6" fill="#32CD32" />
              </svg>
            </div>
            <Lottie className="lottie" animationData={teamwork} loop autoplay />
            <h3>Team</h3>
            <p className='para'>Driven by enthusiastic mentors and learners working together to build real solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
