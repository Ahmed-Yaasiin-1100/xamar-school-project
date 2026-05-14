import React from 'react'
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

function SideDashboard() {
  return (
    <>
            <div className="dashboard">
        <div className="dashboard-all">
            <div className="dashboard-logo">
                <h3>Xamar School</h3>
                <p>Academic Portal</p>
            </div>
            <div className="dashboard-links">
                <div className="dashboard-item">
                   <MdDashboard size={25}/>
                    <Link className='link' to="/dashboard">Dashboard</Link>
                </div>
                <div className="dashboard-item">
                    <PiStudent size={25}/>
                    <Link className='link' to="/students">Students</Link>
                    {/* <Link to="/students">Students</Link> */}
                </div>
                <div className="dashboard-item">
                    <LiaChalkboardTeacherSolid size={25}/>
                    <Link className='link' to="/teachers">Teachers</Link>

                </div>
                <div className="dashboard-item">
                    <PiExamFill size={25}/>
                    <Link className='link' to="/exams">Exams</Link>
                </div>
                <div className="dashboard-item">
                    <TbReportSearch size={25}/>
                    <Link className='link' to="/reports">Reports</Link>
                </div>
                <div className="dashboard-item last">
                    <IoSettingsOutline size={25}/>
                    <Link className='link' to="/settings">Settings</Link>
                </div>
                
                <div className="dashboard-item">
                    <FiLogOut size={25}/>
                    <Link className='link' to="/logout">LogOut</Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SideDashboard