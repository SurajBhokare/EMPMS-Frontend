import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Player } from '@lottiefiles/react-lottie-player';
import './LeaveStatus.css'; // Custom styles

export default function LeaveStatus() {
  const navigate = useNavigate();

  const [employeeId, setEmployeeId] = useState('');
  const [leaves, setLeaves] = useState([]);
  
        // let app = "http://13.60.195.129:8080/EmployeeMangemtSystem-0.0.1(SNAPSHOT)";  //deoloyed project url
        let app ="http://localhost:8080";

  useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem('user'));
    if (userdata) {
      setEmployeeId(userdata.empid);
    }
  }, []);

  useEffect(() => {
    if (employeeId) {
      getLeaveDetails();
    }
  }, [employeeId]);

  const getLeaveDetails = () => {
    // axios.get(`http://localhost:8080/leavesById/${employeeId}`) // normal project url
    axios.get(`${app}/leavesById/${employeeId}`)
      .then((response) => setLeaves(response.data))
      .catch((error) => console.error('Error fetching leave data:', error));
  };

  const cancelLeave = (id) => {
    // axios.delete(`http://localhost:8080/cancel/${id}`) // normal project url
    axios.delete(`${app}/cancel/${id}`)
      .then((response) => {
        if (response.data === "Your leave is cancel..") {
          alert("Leave cancelled successfully");
          getLeaveDetails();
        } else {
          alert("Record not found.");
        }
      })
      .catch((error) => {
        alert('Error: ' + error);
      });
  };

  return (
    <div className="leave-status-wrapper">
      <div className="container py-5">
        <div className="text-center mb-4">
          <img src={`${process.env.PUBLIC_URL}/Img/kingLogo.png`} alt="Logo" height="60" className="me-2" />
          <h2 className="text-primary fw-bold d-inline">Leave Status</h2>
        </div>

        {leaves.length === 0 ? (
          <div className="text-center mt-5">
            {/* <Player
              autoplay
              loop
              src="https://assets10.lottiefiles.com/packages/lf20_uzwz5jv7.json"
              style={{ height: '300px', width: '300px' }}
            /> */} 
            <h5 className="mt-3 text-muted">No leave applications found.</h5>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered shadow table-hover">
              <thead className="table-dark text-center">
                <tr>
                  <th>Employee ID</th>
                  <th>Employee Name</th>
                  <th>From Date</th>
                  <th>To Date</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {leaves.map((leave) => (
                  <tr key={leave.id}>
                    <td>{leave.employeeId}</td>
                    <td>{leave.employeeName}</td>
                    <td>{leave.fromDate}</td>
                    <td>{leave.toDate}</td>
                    <td>{leave.reason}</td>
                    <td>
                      <span className={`badge ${leave.status === 'APPROVED' ? 'bg-success' :
                        leave.status === 'REJECTED' ? 'bg-danger' : 'bg-warning text-dark'}`}>
                        {leave.status}
                      </span>
                    </td>
                    <td className="d-flex justify-content-center gap-2">
                      <button
                        className="btn btn-outline-primary btn-sm rounded-pill"
                        onClick={() => navigate(`/updateLeave/${leave.id}`)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-outline-danger btn-sm rounded-pill"
                        onClick={() => cancelLeave(leave.id)}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
