import React from 'react'
import SideDashboard from './SideDashboard'
import Dashboard from './Dashboard'




function Students() {


  let students = [
    {
      id : "C126",
      name : "Qaalid Maxamed Yaasiin",
      gender : "Male",
      location : "Waaberi",
      Action : ["Update", "Delete"]
    },
    {
      id : "C226",
      name : "Farxiyo Cali Yuusuf",
      gender : "Female",
      location : "Hodan",
      Action : ["Update", "Delete"]
    },
    {
      id : "C326",
      name : "Cumar Xirsi Daahir",
      gender : "Male",
      location : "Shangani",
      Action : ["Update", "Delete"]
    }

  ]

  
  return (
    <>
     <SideDashboard/>

     
      
      <div className="table">
      <table>

        <thead>
          <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Location</th>
          <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
           students.map((st)=>(
             <tr>
            <td>{st.id}</td>
            <td>{st.name}</td>
            <td>{st.gender}</td>
            <td>{st.location}</td>
            <td style={{display:"flex", gap: "10px"}}><span style={{backgroundColor:"green", padding:"5px", borderRadius:"10px", color:"white"}}>{st.Action[0]}</span> <span style={{backgroundColor:"red", padding:"5px", borderRadius:"10px", color:"white"}}>{st.Action[1]}</span></td>
          </tr>
           ))
          }
          
         
        </tbody>
      </table>

         

    </div>
    </>
  )
}

export default Students