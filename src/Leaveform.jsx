import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import './ApplyLeave.css'; // External CSS for custom styling

import 'aos/dist/aos.css';
import AOS from 'aos';
import Lottie from 'lottie-react';
import apply from './leave.json'
AOS.init();


const ApplyLeave = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [reason, setReason] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [status, setStatus] = useState('Pending');

      //  let app = "http://13.60.195.129:8080/EmployeeMangemtSystem-0.0.1(SNAPSHOT)";  //deoloyed project url
      let app ="http://localhost:8080";

  const navigate = useNavigate();

  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem('user'));
    if (userdata) {
      setEmployeeId(userdata.empid);
      setEmployeeName(`${userdata.firstname} ${userdata.lastname}`);
    }
  }, []);

  const leave = {
    employeeId,
    employeeName,
    reason,
    fromDate,
    toDate,
    status
  };

  const applyLeave = (event) => {
    event.preventDefault();
    // axios.post('http://localhost:8080/apply', leave) // normal project url
    axios.post(`${app}/apply`, leave)
      .then((response) => {
        if (response.data === 'You applied for leave successfully') {
          alert('Leave applied successfully');
          navigate('/leaveinfo');
        } else {
          alert(response.data);
        }
      })
      .catch((error) => {
        console.error('Error applying for leave:', error);
        alert('There was an error applying for leave. Please try again later.');
      });
  };

  return (
    <div className="leave-apply-wrapper">
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
          <Lottie animationData={apply}  > </Lottie>

          </div>
          <div className="col-lg-6">
            <form onSubmit={applyLeave} className="p-4 shadow rounded-4 bg-white" data-aos="fade-up">
              <h3 className="text-center mb-4 text-primary fw-bold">Apply for Leave</h3>

              <div className="mb-3">
                <label className="form-label">Employee Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={employeeName}
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Employee ID</label>
                <input
                  type="number"
                  className="form-control"
                  value={employeeId}
                  readOnly
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Reason</label>
                <textarea
                  className="form-control"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Enter your reason for leave"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">From Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">To Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 rounded-pill">Apply Leave</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyLeave;
