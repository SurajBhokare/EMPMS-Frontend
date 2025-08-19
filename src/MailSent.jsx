import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BirthdayMailStatus.css';
import Lottie from 'lottie-react';
import clabrate from './Confett.json'
import birth from './Happy Birthday Greeting.json'

export default function MailSent() {
  const [birthdayEmployees, setBirthdayEmployees] = useState([]);
  const [sentEmployees, setSentEmployees] = useState([]);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const app = 'http://localhost:8080';

  useEffect(() => {
    axios.get(`${app}/birthday-employees`)
      .then(res => {
        setBirthdayEmployees(res.data);
      })
      .catch(err => {
        console.error(err);
        setStatus('❌ Error loading birthday employees');
      });
  }, []);

  const handleSendMail = async () => {
    setLoading(true);
    setStatus('');
    try {
      const res = await axios.get(`${app}/wish`);
      setStatus(res.data);

      const response = await axios.get(`${app}/birthday-employees`);
      setSentEmployees(response.data);
    } catch (err) {
      console.error(err);
      setStatus("❌ Error occurred while sending birthday emails.");
    }
    setLoading(false);
  };

  return (
    <div className="birthday-status">
      <div className='contaner d-flex justify-content-center align-item-center'>
        <Lottie animationData={birth} style={{width:'100px',height:'auto'}}></Lottie>
<h1>Today's Birthday Employees</h1>
      </div>
         

      {birthdayEmployees.length > 0 ? (
        <div className="card-container">
          {birthdayEmployees.map(emp => (
            <div className="employee-card" key={emp.id}>
              <h3>{emp.firstname} {emp.lastname}</h3>
              <h3>{emp.department}</h3>
              <h3>{emp.email} </h3>
              <h3>{emp.dob}</h3>
              <img src={emp.profile} alt="" />

              {/* Balloon animation */}
              <Lottie animationData={clabrate} className='lottie' ></Lottie>
            </div>
          ))}
        </div>
      ) : (
        <p>No employee has a birthday today.</p>
      )}

      {birthdayEmployees.length > 0 && (
        <button className="send-btn" onClick={handleSendMail} disabled={loading}>
          {loading ? "Sending..." : "Send Birthday Emails 🎉"}
        </button>
      )}

      {status && <p className="status-message">{status}</p>}

      {sentEmployees.length > 0 && (
        <>
          <h3>✅ Emails Sent To:</h3>
          <ul>
            {sentEmployees.map(emp => (
              <li key={emp.id}>{emp.firstname} {emp.lastname} ({emp.email})</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
