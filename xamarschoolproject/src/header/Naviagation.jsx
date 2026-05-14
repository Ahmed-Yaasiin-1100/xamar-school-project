import React from 'react'
import { Link } from 'react-router-dom'
import Help from "./Help"
import logoImage from "../assets/logo2.png";
function Naviagation() {
  return (
    <div>
        <div className="header">
            <div className="logo">
                <div className="image">
                    <img src={logoImage} alt="Logo" />
                    

                </div>
                <h2>Xamar <span>School</span></h2>
            </div>
            <div className="nav">
                <ul>
                   
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="#">about</Link></li>
                    <li><Link to="#">Contact</Link></li>
                    <li><Link to="/login">Login</Link></li>
                   
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Naviagation