import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AddEmp from './AddEmp';
import AdminDashborad from './AdminDashborad';
import { Route, Routes } from 'react-router-dom';
import UpdateEmp from './UpdateEmp';
import EmpDashbord from './EmpDashbord';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import LeaveForm from './Leaveform.jsx';
import LeaveStatus from './LeaveStatus.jsx';
import UpdateLeave from './UpdateLeave.jsx';
import LeavesStatusUp from './LeavesStatusUp.jsx';

import '@fortawesome/fontawesome-free/css/all.min.css';

import Form from './Form.jsx';
import MailSent from './MailSent.jsx';



function App() {
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  return (
    <div>
        <Navbar></Navbar>

        <Routes>
          <Route path="/leave" element={<LeaveForm />} />
          <Route path="/leaveinfo" element={<LeaveStatus />} />
          <Route path="/APPROVE" element={<LeavesStatusUp />} />
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/service' element={<Service></Service>}></Route>
          <Route path="/addemp" element={<AddEmp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/update/:empid" element={<UpdateEmp />} />
          <Route path="/updateLeave/:id" element={<UpdateLeave/>} />
          <Route path="/admin" element={<AdminDashborad />} />
          <Route path="/dashboard" element={<EmpDashbord />} />
          <Route path='/register' element={<Form />}></Route>
          <Route path='/mail' element={<MailSent />}></Route>
                   
        </Routes>


    </div>
  );
}

export default App;
