import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Form.css';
import Lottie from "lottie-react";
import staff from './staff augmentation.json'

export default function AddEmp() {

    let navigate = useNavigate();
    // let [empid, setEmpid] = useState('');
    let [firstname, setFirstname] = useState('');
    let [lastname, setLastname] = useState('');
    let [department, setDepartment] = useState('');
    let [salary, setSalary] = useState('');
    let [email, setEmail] = useState('');
    let [contactno, setContactno] = useState('');
    let [joiningdate, setJoiningdate] = useState('');
    let [dob, setDob] = useState('');
    let [designation, setDesignation] = useState('');
    let [exp, setExp] = useState('');
    let [gender, setGender] = useState('');
    let [address, setAddress] = useState('');
    let [status, setStatus] = useState('');
    let [profile, setProfile] = useState('');
    let [reportingmanager, setReportingmanager] = useState('');

    // let app = "http://13.60.195.129:8080/EmployeeMangemtSystem-0.0.1(SNAPSHOT)";  //deoloyed project url
    let app ="http://localhost:8080";

    let AddEmployee = (e) => {


        if (validation()) {
            e.preventDefault();
            let emp = {
                firstname, lastname, department, salary, email, contactno,
                joiningdate, dob, designation, exp, gender,
                address, status, profile, reportingmanager
            };
            // axios.post("http://localhost:8080/addemp", emp) // normal project url
            axios.post(`${app}/addemp`, emp)
                .then((resp) => {
                    if (resp.data) {
                        alert("Employee Added..");
                        navigate("/admin");
                    }
                })
                .catch((error) => {
                    alert("error" + error);
                });
        }
    }

    let handleimg = (event) => {
        var file = event.target.files[0];
        var filepath = `./img/${file.name}`;
        console.log(filepath);
        setProfile(filepath);
    }

    let validation = () => {
        if (firstname === "" || lastname === "" || gender === "" || department === "" || designation === "" || email === "" || exp === ""
            || dob === "" || joiningdate === "" || reportingmanager === "" || address === "" || profile === "" || status === "" || salary === "") {
            alert("please feel all fields..");
        }
        else if (!/^[A-Za-z\s]{2,30}$/.test(firstname)) {
            alert("Enter first Name");
            return false;
        }
        else if (!/^[A-Za-z\s]{2,30}$/.test(lastname)) {
            alert("Enter Last Name");
            return false;
        }
        else if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert("enter a valid email address..");
            return false;
        }
        else if (salary <= 0) {
            alert("enter a valid salary amount");
            return false;
        }
        else if (!contactno || contactno.length !== 10 || isNaN(contactno)) {
            alert("please enter 10 digit contact No.");
            return false;
        }
        else if (exp <= 0) {
            alert("enter valide experience..")
        }
        else {
            return true;
        }
    }

    return (

        <div className='vg d-flex  container'> {/* ← This class is required for centering! */}
            <div className='container img-box'>
                <Lottie animationData={staff} style={{height:"100%",width:"100%"}} />
            </div>
            <form action="" className='bg-light' onSubmit={AddEmployee}>
                <h3 className="heading">Add Employee</h3>

                <div className="form-row">
                    <input type="text" placeholder='First Name' className='form-content' onChange={(e) => setFirstname(e.target.value)} />
                    <input type="text" placeholder='Last Name' className='form-content' onChange={(e) => setLastname(e.target.value)} />
                </div>

                <div className="form-row">
                    <input type="text" placeholder='Department' className='form-content' onChange={(e) => setDepartment(e.target.value)} />
                    <input type="text" placeholder='Salary' className='form-content' onChange={(e) => setSalary(e.target.value)} />
                </div>

                <div className="form-row">
                    <input type="email" placeholder='Email' className='form-content' onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder='Contact No' className='form-content' onChange={(e) => setContactno(e.target.value)} />
                </div>

                <div className="form-row">
                    <div style={{ flex: 1 }}>
                        <label>Joining Date</label>
                        <input type="date" className='form-content' onChange={(e) => setJoiningdate(e.target.value)} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <label>Date of Birth</label>
                        <input type="date" className='form-content' onChange={(e) => setDob(e.target.value)} />
                    </div>
                </div>

                <div className="form-row">
                    <input type="text" placeholder='Designation' className='form-content' onChange={(e) => setDesignation(e.target.value)} />
                    <input type="number" placeholder='Experience (Years)' className='form-content' onChange={(e) => setExp(e.target.value)} />
                </div>

                <div className="form-row">
                    <textarea placeholder='Address' className='form-content' onChange={(e) => setAddress(e.target.value)} />
                    <select className='form-content' onChange={(e) => setGender(e.target.value)}>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <div className="form-row">
                    <input type="text" placeholder='Status' className='form-content' onChange={(e) => setStatus(e.target.value)} />
                    <input type="text" placeholder='Reporting Manager' className='form-content' onChange={(e) => setReportingmanager(e.target.value)} />
                </div>

                <div className="form-row">
                    <input type="file" accept="image/*" className='form-content' onChange={handleimg} />
                </div>

                <div className="form-row">
                    <input type="submit" value="Add Employee" className='btn' />
                </div>
            </form>
        </div>

    )
}