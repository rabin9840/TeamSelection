const Employees=({employees,selectedTeam,handleEmployeeCardClick,handleTeamSelectionChange})=>{

    return(
       
        <main>

            <div>
                <select value={
                    selectedTeam
                } onChange={handleTeamSelectionChange}>
                    <option value="Team A">Team A</option>
                    <option value="Team B">Team B</option>
                    <option value="Team C">Team C</option>
                    <option value="Team D">Team D</option>
                </select>

            </div>

             <div>
           
            {
                employees.map((employee)=>(
                    <div key={employee.id} id={employee.id} className={(employee.teamName===selectedTeam? 'standout':'notStandout')} style={{cursor:'pointer'}} onClick={handleEmployeeCardClick}>
                        {/* part to display image */}
                        {/* use ternary operator to display the image according to the gender */}
{/* 
                    {(employee.gender)==="male"?<img src={maleProfile}></img>:
                                                <img src={femaleProfile}></img>} */}
                        <div>
                        <p>Full Name:{employee.fullName}</p>
                        <p>Designation:{employee.designation}</p>
                        <p>TeamName:{employee.teamName}</p>
                        <br></br>
                        <br />
                        </div>

                    </div>
                ))
            }
            </div>
        </main>
        
    )
}

export default Employees;