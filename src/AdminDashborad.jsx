import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Dashboard.css';
// import { GiStrong } from "react-icons/gi";

const AdminDashboard = () => {

    const navigate = useNavigate();

    let [searchEmp, setSerachEmp] = useState([]);
    let [fname, setFname] = useState('');
    let [lname, setLname] = useState('');
    let [dep, setDep] = useState('');
    let [deg, setDeg] = useState('');

    // let app = "http://13.60.195.129:8080/EmployeeMangemtSystem-0.0.1(SNAPSHOT)";  //deoloyed project url
    let app ="http://localhost:8080";

    const UpdateEmp = (empid) => {
        navigate(`/update/${empid}`);
    }

    const [emp, setEmp] = useState([]);

    useEffect(() => {
        getData();
    });

    const getData = () => {
        // axios.get("http://localhost:8080/allemp") // normal project url
        axios.get(`${app}/allemp`)
            .then((resp) => {
                setEmp(resp.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    const deleteData = (empid) => {
        // axios.delete(`http://localhost:8080/delemp/${empid}`) // normal project url
        axios.delete(`${app}/delemp/${empid}`)
            .then((response) => {
                if (response.data === "Employee record deleted sucessfully..") {
                    alert("record is deleted..");
                    getData();
                } else {
                    alert("record not found..");
                }
            })
            .catch((error) => {
                alert('error: ' + error);
            });
    }

    let searchByFN = () => {
        // axios.get(`http://localhost:8080/allempbyfn?fname=${fname}`) // normal project url
        axios.get(`${app}/allempbyfn?fname=${fname}`)
            .then((resp) => {
                if (resp.data) {
                    setSerachEmp(resp.data);
                    console.log(searchEmp);

                }
            })
            .catch((error) => {
                console.log(`error ${error}`);
            });
    }

    let searchByLN = () => {
        // axios.get(`http://localhost:8080/allempbyln?lastname=${lname}`) // normarl project url
        axios.get(`${app}/allempbyln?lastname=${lname}`)
            .then((resp) => {
                if (resp.data) {
                    setSerachEmp(resp.data);
                    console.log(searchEmp);

                }
            })
            .catch((error) => {
                console.log(`error ${error}`);
            })
    }

    let searchByDep = () => {
        // axios.get(`http://localhost:8080/allempbydep?dep=${dep}`) // normal project url
        axios.get(`${app}/allempbydep?dep=${dep}`)
            .then((resp) => {
                if (resp.data) {
                    setSerachEmp(resp.data);
                    console.log(searchEmp);

                }
            })
            .catch((error) => {
                console.log(`error ${error}`);
            })
    }

    let searchByDeg = () => {
        // axios.get(`http://localhost:8080/allempbydg?deg=${deg}`) // normal project url
        axios.get(`${app}/allempbydg?deg=${deg}`)
            .then((resp) => {
                if (resp.data) {
                    setSerachEmp(resp.data);
                    console.log(searchEmp);

                }
            })
            .catch((error) => {
                console.log(`error ${error}`);
            })

    }

    return (
        <div className="dashboard-container animate fadeIn ">
            <div className="container mt-4 animate fadeIn ">
                <h2 className="text-center mb-4 ">All Employees</h2>
                <div className="container mb-4 rounded search-section bg-light shadow ">
                    <div className="row searchbar align-items-center justify-content-center ">


                        <div className="col ">
                            <input type="text" name="" placeholder="Enter FirstName" id="" onChange={(event) => { setFname(event.target.value) }} className="form-control" />
                            <input type="button" value="Search" onClick={searchByFN} className="btn " /></div>
                        <div className="col">
                            <input type="text" name="" placeholder="Enter LastName" id="" onChange={(event) => { setLname(event.target.value) }} className="form-control" />
                            <input type="button" value="Search" onClick={searchByLN} className="btn " /></div>
                        <div className="col">
                            <input type="text" name="" placeholder="Enter Department" id="" onChange={(event) => { setDep(event.target.value) }} className="form-control" />
                            <input type="button" value="Search" onClick={searchByDep} className="btn " /></div>
                        <div className="col">
                            <input type="text" name="" placeholder="Enter Designation" id="" onChange={(event) => { setDeg(event.target.value) }} className="form-control" />
                            <input type="button" value="Search" onClick={searchByDeg} className="btn" /></div>
                    </div>
                </div>
                <div className="row g-3 justify-content-center container emp-card">
                    {
                        (searchEmp.length > 0 ? searchEmp : emp).map((e, index) =>
                            // emp.map((e, index) => (
                            <div className="col-md-4 mb-4" key={e.empid} style={{ "--i": index }}>
                                <div className="card shadow imgd">
                                    <img
                                        src={e.profile || "https://via.placeholder.com/300x180.png?text=Profile"}
                                        className="card-img-top img"
                                        alt="Profile"
                                        style={{ height: "180px", objectFit: "contain" }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title"><strong>{e.empid} {e.firstname} {e.lastname} </strong></h5>
                                        <p className="card-text">
                                            <span className="details text-black animate fadeIn ">
                                            <strong>Department:</strong> {e.department}<br />
                                            <strong>Designation:</strong> {e.designation}<br />
                                            <strong>Email:</strong> {e.email}<br />
                                            <strong>Contact:</strong> {e.contactno}<br />
                                            <strong>Salary:</strong> ₹{e.salary}<br />
                                            <strong>Experience:</strong> {e.exp} years<br />
                                            <strong>Gender:</strong> {e.gender}<br />
                                            <strong>DOB:</strong> {e.dob}<br />
                                            <strong>Joining Date:</strong> {e.joiningdate}<br />
                                            <strong>Manager:</strong> {e.reportingmanager}<br />
                                            <strong>Status:</strong> {e.status}<br />
                                            <strong>Address:</strong> {e.address}
                                            </span>
                                        </p>
                                        <div className="d-flex justify-content-center gap-2">
                                            <input type="button" value="Update" className="update-btn" onClick={() => UpdateEmp(e.empid)} />
                                            <input type="button" value="Delete" className="delete-btn" onClick={() => deleteData(e.empid)} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )}
                </div>


            </div >
        </div>
    );
};

export default AdminDashboard;
