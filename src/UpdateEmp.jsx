import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Form.css';
import Lottie from 'lottie-react';
import update from './UPDATE.json'



export default function UpdateEmp() {


    // let [isupdate, setIsupdate]=useState(false);
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
    let [address, setAddress] = useState('');
    let [gender, setGender] = useState('');
    let [status, setStatus] = useState('');
    let [profile, setProfile] = useState('');
    let [reportingmanager, setReportingmanager] = useState('');

        //  let app = "http://13.60.195.129:8080/EmployeeMangemtSystem-0.0.1(SNAPSHOT)";  //deoloyed project url
        let app ="http://localhost:8080";

 const navigate = useNavigate();
 
    let info = useParams();
    let empid = info.empid;

    useEffect(() => {
        // axios.get(`http://localhost:8080/shoemp?id=${empid}`) // normal project url
        axios.get(`${app}/shoemp?id=${empid}`)
            .then((res) => {
                let emp = res.data;
                console.log(emp);

                setFirstname(emp.firstname);
                setLastname(emp.lastname);
                setDepartment(emp.department);
                setSalary(emp.salary);
                setEmail(emp.email);
                setContactno(emp.contactno);
                setJoiningdate(emp.joiningdate);
                setDob(emp.dob);
                setDesignation(emp.designation);
                setExp(emp.exp);
                setAddress(emp.address);
                setGender(emp.gender);
                setStatus(emp.status);
                setProfile(emp.profile);
                setReportingmanager(emp.reportingmanager);
            })
            .catch((error) => {
                console.log(error);
            })
    },[empid])



    let updateemployee = (event) => {
        event.preventDefault();
        let newemp = {
            firstname,
            lastname,
            department,
            salary,
            email,
            contactno,
            joiningdate,
            dob,
            designation,
            exp,
            address,
            gender,
            status,
            profile,
            reportingmanager,
        };
        // axios.put(`http://localhost:8080/upemp/${empid}`, newemp) // normal project url
        axios.put(`${app}/upemp/${empid}`, newemp)
            .then((res) => {
                if (res.data === "Employees Record updated successfully") {
                    alert("Employee record updated");
                    navigate("/admin");
                }
            })
            .catch((error) => {
                alert("error " + error);
            })
    }

    const handleimg = (event) => {
        const file = event.target.files[0];
        var filepath = `./img/${file.name}`;
        setProfile(filepath);
    }




    return (
       <div className='container d-flex justify-content-center border vg bg-secondary'>
           <div className='container'>
                <Lottie animationData={update} />
            </div>
    <form className='bg-light' onSubmit={updateemployee}>
       
        <h3 className='heading'>Update Employee</h3>

        <div className="form-row">
            <input type="text" value={firstname} placeholder='First Name' className='form-content'
                onChange={(e) => setFirstname(e.target.value)} />
            <input type="text" value={lastname} placeholder='Last Name' className='form-content'
                onChange={(e) => setLastname(e.target.value)} />
        </div>

        <div className="form-row">
            <input type="text" value={department} placeholder='Department' className='form-content'
                onChange={(e) => setDepartment(e.target.value)} />
            <input type="text" value={salary} placeholder='Salary' className='form-content'
                onChange={(e) => setSalary(e.target.value)} />
        </div>

        <div className="form-row">
            <input type="email" value={email} placeholder='Email' className='form-content'
                onChange={(e) => setEmail(e.target.value)} />
            <input type="text" value={contactno} placeholder='Contact No' className='form-content'
                onChange={(e) => setContactno(e.target.value)} />
        </div>

        <div className="form-row">
            <div style={{ flex: 1 }}>
                <label>Joining Date</label>
                <input type="date" value={joiningdate} className='form-content'
                    onChange={(e) => setJoiningdate(e.target.value)} />
            </div>
            <div style={{ flex: 1 }}>
                <label>Date of Birth</label>
                <input type="date" value={dob} className='form-content'
                    onChange={(e) => setDob(e.target.value)} />
            </div>
        </div>

        <div className="form-row">
            <input type="text" value={designation} placeholder='Designation' className='form-content'
                onChange={(e) => setDesignation(e.target.value)} />
            <input type="number" value={exp} placeholder='Experience (Years)' className='form-content'
                onChange={(e) => setExp(e.target.value)} />
        </div>

        <div className="form-row">
            <textarea placeholder='Address' value={address} className='form-content'
                onChange={(e) => setAddress(e.target.value)} />
            <select value={gender} className='form-content'
                onChange={(e) => setGender(e.target.value)}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
        </div>

        <div className="form-row">
            <input type="text" value={status} placeholder='Status' className='form-content'
                onChange={(e) => setStatus(e.target.value)} />
            <input type="text" value={reportingmanager} placeholder='Reporting Manager' className='form-content'
                onChange={(e) => setReportingmanager(e.target.value)} />
        </div>

        <div className="form-row">
            <input type="file" accept="image/*" className='form-content'
                onChange={handleimg} />
        </div>

        <div className="d-flex justify-content-center mt-3">
            <input type="submit" value="Update Employee" className='btn btn-info' />
        </div>
    </form>
</div>

    )
}