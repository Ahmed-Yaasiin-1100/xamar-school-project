import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Login from './Login.jsx'
import "./App.css"
import Home from "./header/Home.jsx"
import Help from './header/Help.jsx';
import Dashboard from './Dashboard/Dashboard.jsx'
import Students from './Dashboard/Students.jsx';


export const App = () => {
  return (
    <>
     
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
           <Route path='/login' element = {<Login/>}/>
           <Route path='/help' element={<Help/>}/>
           <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/students' element={<Students/>}/>
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App;
