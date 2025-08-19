import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Player } from '@lottiefiles/react-lottie-player';
import './LeavesStatusUp.css'; // custom styles

export default function LeavesStatusUp() {
  const [leavesList, setLeavesList] = useState([]);

      //  let app = "http://13.60.195.129:8080/EmployeeMangemtSystem-0.0.1(SNAPSHOT)";  //deoloyed project url
      let app ="http://localhost:8080";

  useEffect(() => {
    getLeaveDetails();
  }, []);

  const getLeaveDetails = () => {
    // axios.get('http://localhost:8080/allLeaves') // normal project url
    axios.get(`${app}/allLeaves`)
      .then((response) => {
        setLeavesList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching leave details:", error);
      });
  };

  const updateLeaveStatus = (id, status) => {
    // axios.put(`http://localhost:8080/status/${id}/${status}`) // normal project url
    axios.put(`${app}/status/${id}/${status}`)
      .then((response) => {
        alert(`Leave ID ${id} status updated to ${status}`);
        getLeaveDetails(); // Refresh list
      })
      .catch((error) => {
        console.error("Error updating leave status:", error);
      });
  };

  return (
    <div className="leaves-status-admin-wrapper">
      <div className="container py-5">
        <div className="text-center mb-4">
          <img src={`${process.env.PUBLIC_URL}/Img/kingLogo.png`} alt="Logo" height="60" className="me-2" />
          <h2 className="text-primary fw-bold d-inline">Manage Leave Requests</h2>
        </div>

        {leavesList.length === 0 ? (
          <div className="text-center mt-5">
            <Player
              autoplay
              loop
              src="https://assets10.lottiefiles.com/packages/lf20_uzwz5jv7.json"
              style={{ height: '300px', width: '300px' }}
            />
            <h5 className="mt-3 text-muted">No leave requests available.</h5>
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
                {leavesList.map((leave) => (
                  <tr key={leave.id}>
                    <td>{leave.employeeId}</td>
                    <td>{leave.employeeName}</td>
                    <td>{leave.fromDate}</td>
                    <td>{leave.toDate}</td>
                    <td>{leave.reason}</td>
                    <td>
                      <span className={`badge ${
                        leave.status === 'APPROVED' ? 'bg-success' :
                        leave.status === 'REJECTED' ? 'bg-danger' :
                        'bg-warning text-dark'
                      }`}>
                        {leave.status}
                      </span>
                    </td>
                    <td className="d-flex justify-content-center gap-2">
                      <button
                        className="btn btn-outline-success btn-sm rounded-pill"
                        onClick={() => updateLeaveStatus(leave.id, "APPROVED")}
                      >
                        Approve
                      </button>
                      <button
                        className="btn btn-outline-danger btn-sm rounded-pill"
                        onClick={() => updateLeaveStatus(leave.id, "REJECTED")}
                      >
                        Reject
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
