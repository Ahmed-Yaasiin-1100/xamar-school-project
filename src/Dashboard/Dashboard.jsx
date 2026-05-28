import React from 'react'
import "../App.css";
import { MdDashboard } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiExamFill } from "react-icons/pi";
import { TbReportSearch } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { BrowserRouter , Routes , Route, Router, Link } from 'react-router-dom';
import SideDashboard from './SideDashboard';




function Dashboard() {
    
  return (
    <>
  
    <SideDashboard/>

    <div className="header-dashboard">
        <div className="header-all">
            <div className="search">
                <input type="text" placeholder='Enter Search' />
            </div>
            <div className="light">
                <MdDarkMode size={30}/>
            </div>
            <div className="email">
                <h3>Eng Ahmed</h3>
                <p>Admin</p>
                {/* <img src="../assets/profile.jpg" alt="" /> */}
                
            </div>
        </div>
    </div>
    <div className="total">
        <div className="total-all">
            <div className="students-total student">
                <PiStudent  className = "imoji" size={50}/>
                <h4>Total Students</h4>
                <h5>100</h5>
            </div>
            <div className="students-total teacher">
                <LiaChalkboardTeacherSolid className = "imoji" size={50}/>
                <h4>Total Teachers</h4>
                <h5>10</h5>
            </div>
            <div className="students-total active">
                <MdNotificationsActive className = "imoji" size={50}/>
                <h4>Active Students</h4>
                <h5>800</h5>
            </div>
            <div className="students-total fees">
                <FaMoneyCheckAlt className = "imoji" size={50}/>
                <h4>Last Month Fees</h4>
                <h5>$5000</h5>
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard