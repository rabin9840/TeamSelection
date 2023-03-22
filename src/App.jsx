import { useState,useEffect } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Employees from './Employees'

function App() {

  // to transfer value from parent to child component
  const[selectedTeam,setSelectedTeam]=useState(JSON.parse(localStorage.getItem('selectedTeam'))||'');


  // to manage state of details of an employees
  const [employees,setEmployees]=useState(JSON.parse(localStorage.getItem('employeeList'))||[
      {id:1,fullName:"Bob Jones",designation:"Javascript Developer",gender:"male",teamName:"Team A"},
      {id:2,fullName:"Jones Jones",designation:"Javascript Developer",gender:"Female",teamName:"Team A"},
      {id:3,fullName:"Silly James",designation:"Java Developer",gender:"male",teamName:"Team A"},
      {id:4,fullName:"Ferrita",designation:"Web Designer",gender:"Female",teamName:"Team A"},
      {id:5,fullName:"Jilly Balley",designation:"Node Developer",gender:"female",teamName:"Team B"},
      {id:6,fullName:"Bob Jones",designation:"Javascript Developer",gender:"male",teamName:"Team B"},
      {id:7,fullName:"Jones Jones",designation:"Javascript Developer",gender:"Female",teamName:"Team B"},
      {id:8,fullName:"Silly James",designation:"Java Developer",gender:"male",teamName:"Team B"},
      {id:9,fullName:"Ferrita",designation:"Web Designer",gender:"Female",teamName:"Team B"},
      {id:10,fullName:"Jilly Balley",designation:"Node Developer",gender:"female",teamName:"Team C"},
      {id:11,fullName:"Bob Jones",designation:"Javascript Developer",gender:"male",teamName:"Team C"},
      {id:12,fullName:"Jones Jones",designation:"Javascript Developer",gender:"Female",teamName:"Team C"},
      {id:13,fullName:"Silly James",designation:"Java Developer",gender:"male",teamName:"Team C"},
      {id:14,fullName:"Ferrita",designation:"Web Designer",gender:"Female",teamName:"Team C"},
      {id:15,fullName:"Jilly Balley",designation:"Node Developer",gender:"female",teamName:"Team C"},
      {id:16,fullName:"Bob Jones",designation:"Javascript Developer",gender:"male",teamName:"Team D"},
      {id:17,fullName:"Jones Jones",designation:"Javascript Developer",gender:"Female",teamName:"Team D"},
      {id:18,fullName:"Silly James",designation:"Java Developer",gender:"male",teamName:"Team D"},
      {id:19,fullName:"Ferrita",designation:"Web Designer",gender:"Female",teamName:"Team D"},
      {id:20,fullName:"Jilly Balley",designation:"Node Developer",gender:"female",teamName:"Team D"}
])

// when team name changes
useEffect(()=>{
  localStorage.setItem('employeeList',JSON.stringify(employees))

},[employees])

useEffect(()=>{
  localStorage.setItem('selectedTeam',JSON.stringify(selectedTeam))

},[selectedTeam])

  function handleTeamSelectionChange(e){
      console.log(e.target.value);
      setSelectedTeam(e.target.value);
  }

  function handleEmployeeCardClick(e){
      console.log('handleemployee click called')
      console.log(parseInt(e.currentTarget.id));

      const transformedEmployees= employees.map((employee)=>employee.id===parseInt(e.currentTarget.id)
      ?(employee.teamName===selectedTeam)?{...employee,teamName:''}:{...employee,teamName:selectedTeam}
      :employee);
      //  console.log(transformedEmployees);
       setEmployees(transformedEmployees);
  }

  return (
    <div>
      <Header selectedTeam={selectedTeam}
      teamMemberCount={employees.filter((employee)=>employee.teamName===selectedTeam).length}
      />
      <Employees employees={employees}
                 selectedTeam={selectedTeam}
                 handleEmployeeCardClick={handleEmployeeCardClick}
                 handleTeamSelectionChange={handleTeamSelectionChange}
       />
      <Footer />
    </div>
    
  )
}

export default App
