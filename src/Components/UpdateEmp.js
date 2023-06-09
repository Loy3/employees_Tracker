export default function UpdateEmp(props) {

    return (
        <>
        <h1>Update</h1>
                <h3>Update Employee</h3>

                <div className="update" >
                    <div className="upEmp">

                        <p>
                            {
                                employee.map((emp) => {
                                    return (<p>{emp}</p>)
                                })
                            }
                        </p>
                    </div>

                    <input type="text" className="small" placeholder="Enter Employee's First Name" onChange={(event) => setName(event.target.value)} />
                    <input type="text" className="small" placeholder="Enter Employee's Last Name" onChange={(event) => setSurname(event.target.value)} />
                    <br />
                    <input type="number" className="long" placeholder="Enter Employee's ID Number" onChange={(event) => setIdNumber(event.target.value)} />
                    <br />
                    <br />
                    <input type="email" className="small" placeholder="Enter Employee's Email Address" onChange={(event) => setEmailAddress(event.target.value)} />
                    <input type="number" className="small" placeholder="Enter Employee's Phone Number" onChange={(event) => setPhoneNumber(event.target.value)} />
                    <br />

                    <select onChange={(event) => setPosition(event.target.value)}>
                        <option hidden={true} >
                            Select Category
                        </option>
                        <option value={"Back-End Developer"}>Back-End Developer</option>
                        <option value={"Business Analyst"}>Business Analyst</option>
                        <option value={"Front-End Developer"}>Front-End Developer</option>
                        <option value={"Full-Stack Developer"}>Full-Stack Developer</option>
                        <option value={"Scrum Master"}>Scrum Master</option>
                        <option value={"Team Leader"}>Team Leader</option>
                        <option value={"Tester"}>Tester</option>

                    </select>
                    <br />


                    <br />
                    <button onClick={event => updateEmp(event,)}>Update Employee</button>

                </div>

        </>
    )
}