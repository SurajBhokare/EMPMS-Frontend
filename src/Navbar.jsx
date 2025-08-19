import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [role, setRole] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    alert("Logout successfully");
    navigate('/');
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.role) {
      setRole(user.role.trim().toLowerCase());
    } else {
      setRole('');
    }
  }, [location]);

  return (
    <div className='pb-5 container-fluid animate fadeIn container-navbar mb-5'>
      <nav className="navbar navbar-expand-lg custom-navbar shadow glass-navbar d-flex justify-content-between align-items-center fixed-top">
        <div className="container-fluid container">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img src={`${process.env.PUBLIC_URL}/Img/kingLogo.png`} alt='logo' className='logo-img' />
            <span className="ms-2 fw-bold brand-name">Sunshine EMS</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-links">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service">Service</Link>
              </li>
              {!role && (
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Sign in</Link>
                </li>
              )}
              {role === "admin" && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/addemp">Add Employee</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/APPROVE">Approve Leaves</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin">Employees</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/mail">🎂</Link>
                  </li>
                </>
              )}
              {role === "employee" && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/leave">Apply Leave</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/leaveinfo">Leaves Info</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">Employees</Link>
                  </li>
                </>
              )}
              {(role === "admin" || role === "employee") && (
                <li className="nav-item d-flex align-items-center">
                  <span className="logout-icon" title="Sign out" onClick={logout}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24"
                      strokeWidth="1.5" stroke="currentColor"
                      className="logout-svg">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25
                        2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5
                        21h6a2.25 2.25 0 002.25-2.25V15M18 12H9m0
                        0l3-3m-3 3l3 3" />
                    </svg>
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>  
  );
}
