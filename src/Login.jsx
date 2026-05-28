import React from 'react'
import Naviagation from "./header/Naviagation"
import Home from './header/Home'
import { useNavigate } from "react-router-dom"
import {useState} from "react"

function Login() {

    const [emailInput, setEmail] = useState("")
    const [passwordInput, setPassword] = useState("")
   

    const navigate = useNavigate();
    const email = "xamarschool@gmail.com"
    const password = "12345"

    const xogta = ()=>{
        if(emailInput === email && passwordInput === password){
            navigate("/dashboard")
        }else{
            alert("non")
        } 

    }

  return (
    <>
        <Naviagation/>.

        <div className="main">
            <div className="allmain">
                <h3>login</h3>
                <div className="inputs">
                    <div className="input">
                    <label htmlFor="">Email</label>
                    <input
                     type="text" 
                     value={emailInput}
                     onChange={(e)=> setEmail(e.target.value)}
                     placeholder='Enter email'
                     />
                    </div>
                     <div className="input">
                    <label htmlFor="">password</label>
                    <input
                     type="password"
                     value={passwordInput}
                     onChange={(e)=> setPassword(e.target.value)}
                     placeholder='Enter password' />
                    </div>
                    <button className='btn' onClick={xogta}>Submit</button>

                </div>
            </div>
        </div>
    </>
  )
}

export default Login