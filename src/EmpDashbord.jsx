import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EmpDashbor.css';

export default function EmpDashbord() {
  const [emp, setEmp] = useState([]);
  const [searchEmp, setSearchEmp] = useState([]);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [dep, setDep] = useState('');
  const [deg, setDeg] = useState('');

      // let app = "http://13.60.195.129:8080/EmployeeMangemtSystem-0.0.1(SNAPSHOT)";  //deoloyed project url
      let app ="http://localhost:8080";

  useEffect(() => {
    // axios.get("http://localhost:8080/allemp") // normal project url
    axios.get(`${app}/allemp`)
      .then((resp) => setEmp(resp.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const searchHandlers = {
    searchByFN: () => {
      // axios.get(`http://localhost:8080/allempbyfn?fname=${fname}`).then((resp) => {
      axios.get(`${app}/allempbyfn?fname=${fname}`).then((resp) => {
        setSearchEmp(resp.data);
      }).catch(console.error);
    },
    searchByLN: () => {
      // axios.get(`http://localhost:8080/allempbyln?lastname=${lname}`).then((resp) => {
      axios.get(`${app}/allempbyln?lastname=${lname}`).then((resp) => {
        setSearchEmp(resp.data);
      }).catch(console.error);
    },
    searchByDep: () => {
      // axios.get(`http://localhost:8080/allempbydep?dep=${dep}`).then((resp) => {
      axios.get(`${app}/allempbydep?dep=${dep}`).then((resp) => {
        setSearchEmp(resp.data);
      }).catch(console.error);
    },
    searchByDeg: () => {
      // axios.get(`http://localhost:8080/allempbydg?deg=${deg}`).then((resp) => {
      axios.get(`${app}/allempbydg?deg=${deg}`).then((resp) => {
        setSearchEmp(resp.data);
      }).catch(console.error);
    }
  };

  return (
    <div className="emp-dashboard">
    <div className="dashboard-container ">
      <h2 className="text-center mb-4 heading">Employee Dashboard</h2>

      <div className="search-section container mb-4 p-3 rounded shadow bg-light">
        <div className="row g-3 align-items-center justify-content-center searchbar ">
          <div className="col-md-3 ">
            <input type="text" className="form-control " placeholder="First Name" onChange={(e) => setFname(e.target.value)} />
            <button className="btn btn-dark w-100 mt-2" onClick={searchHandlers.searchByFN}>Search</button>
          </div>
          <div className="col-md-3 ">
            <input type="text" className="form-control" placeholder="Last Name" onChange={(e) => setLname(e.target.value)} />
            <button className="btn btn-dark w-100 mt-2" onClick={searchHandlers.searchByLN}>Search</button>
          </div>
          <div className="col-md-3">
            <input type="text" className="form-control" placeholder="Department" onChange={(e) => setDep(e.target.value)} />
            <button className="btn btn-dark w-100 mt-2" onClick={searchHandlers.searchByDep}>Search</button>
          </div>
          <div className="col-md-3">
            <input type="text" className="form-control" placeholder="Designation" onChange={(e) => setDeg(e.target.value)} />
            <button className="btn btn-dark w-100 mt-2" onClick={searchHandlers.searchByDeg}>Search</button>
          </div>
        </div>
      </div>

     <div className="row card-row g-3 justify-content-center container emp-card glass-effect ">
  {(searchEmp.length > 0 ? searchEmp : emp).map((e, index) => (
    <div className="col-md-4 mb-4" key={e.empid}>
      <div className="card shadow glass-effect h-100 animate fadeIn" style={{ "--i": index }} >
        <img
          src={e.profile || "https://via.placeholder.com/300x180.png?text=Profile"}
          className="card-img-top img rounded-top "
          alt="Profile"
          style={{ height: "200px", objectFit: "contain" }}
        />
        <div className="card-body">
          <h5 className="card-title animate fadeIn "><strong>{e.firstname} {e.lastname}</strong></h5>
          <p className="card-text text-muted details">
            <span className="details text-black animate fadeIn ">
            <strong>Department:</strong> {e.department}<br />
            <strong>Designation:</strong> {e.designation}<br />
            <strong>Email:</strong> {e.email}<br />
            <strong>Contact:</strong> {e.contactno}<br />
            <strong>Experience:</strong> {e.exp} years<br />
            <strong>Gender:</strong> {e.gender}<br />
            <strong>DOB:</strong> {e.dob}<br />
            <strong>Joining:</strong> {e.joiningdate}<br />
            <strong>Manager:</strong> {e.reportingmanager}<br />
            <strong>Status:</strong> {e.status}<br />
            <strong>Address:</strong> {e.address}
            </span>
          </p>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
    </div>
  );
}
