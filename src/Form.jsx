import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthFormDemo.css'
import Lottie from "lottie-react";
import profile from './Profile Password Unlock.json'

export default function Form() {
    const [isVisible, setIsVisible] = useState(false);
    const [empid, setEmpid] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [contactno, setContactno] = useState('');
    const [gender, setGender] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [role, setRole] = useState('');

    //    let app = "http://13.60.195.129:8080/EmployeeMangemtSystem-0.0.1(SNAPSHOT)";  //deoloyed project url
    let app = "http://localhost:8080";

    const navigate = useNavigate();

    const validation = () => {
        if (!empid || !firstname || !lastname || !email || !contactno || !gender || !username || !password || !confirmpassword || !role) {
            alert("Please fill all fields.");
            return false;
        } else if (!/^[A-Za-z\\s]{2,30}$/.test(firstname)) {
            alert("Enter valid First Name");
            return false;
        } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
            alert("Enter a valid Gmail address.");
            return false;
    } else if (!/^[0-9]{10}$/.test(contactno)) {
        alert("Enter a valid 10-digit Contact No.");
        return false;
    } else if (password.length < 4 || password.length > 9) {
        alert("Password must be 4-9 characters");
        return false;
    } else if (password !== confirmpassword) {
        alert("Passwords do not match");
        return false;
    }
    return true;
};

const registerHandler = (e) => {
    e.preventDefault();
    if (!validation()) return;

    axios.post(`${app}/register`, {
        empid, firstname, lastname, email, contactno, gender, username, password, confirmpassword, role
    }).then(res => {
        if (res.data === "User registration sucessfully..") {
            alert(`Hello ${username}, your registration is complete.`);
            setIsVisible(true);
        } else if (res.data === "Please enter another UserName") {
            alert("This username already exists. Try another.");
        }
    }).catch(err => alert("Error: " + err));
};

const loginHandler = (e) => {
    e.preventDefault();
    axios.post(`${app}/login`, { username, password })
        .then(res => {
            localStorage.setItem("user", JSON.stringify(res.data));
            let role = res.data.role.trim().toLowerCase();
            if (role === "admin") {
                navigate("/admin");
            } else {
                navigate("/dashboard");
            }
            alert(`Welcome ${res.data.firstname}`);
        }).catch(err => alert("Login Failed"));
};

return (
    <div className="auth-container">
        <div className="auth-box">
            <div className="auth-image">
                < Lottie animationData={profile} loop={true}  style={{height:'100%',width:"100%"}}/>
            </div>
            <div className="auth-form">
                {!isVisible ? (
                    <form onSubmit={registerHandler}>
                        <img
                            src={`${process.env.PUBLIC_URL}/Svg/register.png`}
                            alt="Register" style={{ width: '50%', height: 'auto',marginLeft:"80px" }} />
                        <input type="text" placeholder="Employee ID" onChange={(e) => setEmpid(e.target.value)} />
                        <input type="text" placeholder="First Name" onChange={(e) => setFirstname(e.target.value)} />
                        <input type="text" placeholder="Last Name" onChange={(e) => setLastname(e.target.value)} />
                        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder="Contact No" onChange={(e) => setContactno(e.target.value)} />
                        <select onChange={(e) => setGender(e.target.value)}>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmpassword(e.target.value)} />
                        <select onChange={(e) => setRole(e.target.value)}>
                            <option value="">Select Role</option>
                            <option value="admin">Admin</option>
                            <option value="employee">Employee</option>
                        </select>
                        <button type="submit">Register</button>
                        <button type="button" onClick={() => setIsVisible(true)}>Already Registered? Login</button>
                    </form>
                ) : (
                    <form onSubmit={loginHandler}>
                        <h2>Login</h2>
                        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <button type="submit">Login</button>
                        <button type="button" onClick={() => setIsVisible(false)}>Go to Register</button>
                    </form>
                )}
            </div>
        </div>
    </div>
);
}
