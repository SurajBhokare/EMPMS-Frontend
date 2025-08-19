import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Service.css';

export default function Service() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      title: 'Full Stack Development Training',
      desc: 'Master Java, Spring Boot, React, and MySQL by working on modules from our Employee Management System.',
      icon: '🖥️',
    },
    {
      title: 'Live Project Experience',
      desc: 'Develop real EMS features like leave approval, authentication, and dashboards with mentor support.',
      icon: '🚀',
    },
    {
      title: 'Campus Training',
      desc: 'We collaborate with colleges to deliver industry-standard training programs for better placement outcomes.',
      icon: '🏫',
    },
    {
      title: 'Job Placement Support',
      desc: 'Resume preparation, mock interviews, and job referrals through our partner network.',
      icon: '🎯',
    },
    {
      title: 'Corporate Training',
      desc: 'Customized upskilling for IT teams in technologies like Spring Boot, Microservices, and React.',
      icon: '🏢',
    },
    {
      title: 'Internship Opportunities',
      desc: 'Hands-on internship programs simulating real project timelines and agile workflows.',
      icon: '🎓',
    }
  ];

  return (
    <div className="service-section py-5 glass-effect  animate fadeIn">
      {/* Header */}
      <div className="header text-black bg-light py-3 px-3 d-flex flex-column flex-md-row justify-content-between align-items-center fadeIn animate" data-aos="fade-down">
        <div className="d-flex align-items-center mb-3 mb-md-0">
          <img src={`${process.env.PUBLIC_URL}/Img/kingLogo.png`}alt="HefShine Logo" className="me-3" style={{ height: '50px', width: '50px', objectFit: 'contain' }} />
          <h2 className="mb-0 text-center text-md-start" style={{ fontSize: '1.5rem' }}>Sunshine Employee Management System</h2>
        </div>
        <span className="tagline text-black text-center text-md-end mt-2 mt-md-0">We bound to place you....</span>
      </div>

      {/* Services */}
      <div className="container py-5">
        <h3 className="text-center fw-bold mb-0">Our Services</h3>
        <p className="text-center text-dark-50 mb-5">
          At SunShine Private Limited, we provide real-time training built around our in-house <strong>Employee Management System (EMS)</strong> project to make you industry-ready.
        </p>

        <div className="row g-4">
          {services.map((service, idx) => (
            <div
              className="col-12 col-sm-6 col-lg-4 d-flex"
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <div className="service-card text-center p-4 w-100 h-100 d-flex flex-column align-items-center">
                <div className="service-icon mb-3" style={{ fontSize: '2.5rem' }}>{service.icon}</div>
                <h5 className="fw-bold mb-2 text-dark">{service.title}</h5>
                <p className="text-muted">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
