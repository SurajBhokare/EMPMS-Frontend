import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function UpdateLeave() {
    const [employeeName, setEmployeeName] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [reason, setReason] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    // let app = "http://13.60.195.129:8080/EmployeeMangemtSystem-0.0.1(SNAPSHOT)";  //deoloyed project url
    let app ="http://localhost:8080";

    useEffect(() => {
        // axios.get(`http://localhost:8080/findL/${id}`) // normal project url
        axios.get(`${app}/findL/${id}`)
            .then((response) => {
                const leave = response.data;
                setEmployeeName(leave.employeeName);
                setEmployeeId(leave.employeeId);
                setReason(leave.reason);
                setFromDate(leave.fromDate);
                setToDate(leave.toDate);
            });
    }, [id]);

    const updateLeave = (e) => {
        e.preventDefault();

        const updatedLeave = {
            employeeName,
            employeeId,
            reason,
            fromDate,
            toDate,
        };

        // axios.put(`http://localhost:8080/updateL/${id}`, updatedLeave) // normal project url
        axios.put(`${app}/updateL/${id}`, updatedLeave)
            .then((response) => {
                if (response.data === 'Leave is updated.') {
                    alert("Leave updated successfully");
                    navigate('/leaveinfo');
                } else {
                    alert("Invalid ID.");
                }
            })
            .catch((error) => {
                alert('Error updating leave: ' + error);
            });
    };

    return (
        <div className="update-leave-container">
            <div className="update-leave-wrapper">
                <div className="svg-section">
                    <img
                        src="https://t4.ftcdn.net/jpg/06/91/94/67/360_F_691946780_MJSqO5owHHSOupJBX6mzcdn6Y4LI5DkK.jpg"
                        alt="Floating Leave"
                        className="svg-icon"
                    />
                </div>


                <div className="form-section">
                    <h3 className="form-title">Update Leave Request</h3>
                    <form onSubmit={updateLeave}>
                        <div className="form-group">
                            <label>Employee Name</label>
                            <input type="text" value={employeeName} className="form-control"
                                onChange={(e) => setEmployeeName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Employee ID</label>
                            <input type="number" value={employeeId} className="form-control"
                                onChange={(e) => setEmployeeId(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Reason</label>
                            <textarea value={reason} className="form-control"
                                onChange={(e) => setReason(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>From Date</label>
                            <input type="date" value={fromDate} className="form-control"
                                onChange={(e) => setFromDate(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>To Date</label>
                            <input type="date" value={toDate} className="form-control"
                                onChange={(e) => setToDate(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-success mt-2 w-100">Update Leave</button>
                    </form>
                </div>
            </div>

            {/* Styles */}
            <style>{`
        .update-leave-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #c6f0e8, #b7bdf8, #f5c3ff);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
        }
        .update-leave-wrapper {
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 30px;
          display: flex;
          flex-direction: row;
          gap: 40px;
          width: 90%;
          max-width: 900px;
          align-items: center;
        }
        .svg-section {
          flex: 1;
          display: flex;
          justify-content: center;
        }
     .svg-icon {
  width: 400px;       /* Increase size */
  height: 400px;
  display: block;
  animation: float 3s ease-in-out infinite;
  box-shadow: 0 1px 100px rgba(177, 94, 222, 0.81);
//   border-radius: 20px;
}

        .form-section {
          flex: 1;
        }
        .form-title {
          font-weight: bold;
          font-size: 24px;
          margin-bottom: 20px;
          color: #333;
        }
        .form-group label {
          font-weight: 500;
        }
        .form-control {
          border-radius: 10px;
          padding: 10px;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        @media (max-width: 768px) {
          .update-leave-wrapper {
            flex-direction: column;
            padding: 20px;
          }
          .svg-icon {
            width: 150px;
          }
        }
      `}</style>
        </div>
    );
}
