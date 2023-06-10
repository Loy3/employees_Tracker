import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function UpdateEmp(props) {
    const navigate = useNavigate();

    const stringifiedDEm = localStorage.getItem('employee');
    // localStorage.setItem('employee', JSON.stringify(stringifiedDEm));
    let displayEmp = JSON.parse(stringifiedDEm);
    //const [display, setDisplay] = useState(displayEmp);

    //console.log(displayEmp);

    /*const stringifiedID = localStorage.getItem('employeeID');
    const empID = JSON.parse(stringifiedID)*/
    const [idNum, setId] = useState(0);


    let employees = "";

    if (displayEmp === null || displayEmp === "" || displayEmp === undefined) {
        navigate("/employee");
    }

    const stringifiedEmp = localStorage.getItem('employees');
    if (stringifiedEmp === "" || stringifiedEmp === null) {
        localStorage.setItem('employees', JSON.stringify([]));
    } else {
        employees = JSON.parse(stringifiedEmp);
    }

    useEffect(() => {
        for (let e = 0; e < employees.length; e++) {
            if (displayEmp[0].empEmailAddress === employees[e].empEmailAddress) {
                setId(e);
            }
        }
        console.log(idNum);
    }, [displayEmp, employees, idNum])

    const [user, setUser] = useState({
        idNumber: displayEmp[0].empIdNumber,
        name: displayEmp[0].empName,
        surname: displayEmp[0].empSurname,
        emailAddress: displayEmp[0].empEmailAddress,
        position: displayEmp[0].empPosition,
        phoneNumber: displayEmp[0].empPhoneNumber,
    });


    function updateEmp() {

        console.log(idNum);
       

        console.log(idNum);

        console.log(employees[idNum]);

        console.log(idNum);
        employees[idNum].empName = user.name;
        employees[idNum].empSurname = user.surname;
        employees[idNum].empIdNumber = user.idNumber;
        employees[idNum].empEmailAddress = user.emailAddress;
        employees[idNum].empPhoneNumber = user.phoneNumber;
        employees[idNum].empPosition = user.position;

        console.log(employees[idNum]);
        localStorage.setItem('employees', JSON.stringify(employees));

        navigate("/employee")
    }

    function cancelUp() {
        navigate("/employee")
    }


    const handleChange = (e) =>
        setUser(prevState => ({ ...prevState, [e.target.name]: e.target.value }),
            console.log(user))

    return (
        <>
            <div className="content" id={"update"}>

                <div className="row">
                    <div className="column">
                        {
                            displayEmp.map((emp, index) => {
                                return (
                                    <div className="update" key={index}>
                                        <h1>Update</h1>
                                        <h3>Update Employee</h3>

                                        <input type="text" className="small" name="name" placeholder={emp.empName} onChange={handleChange} />
                                        <input type="text" className="small" name="surname" placeholder={emp.empSurname} onChange={handleChange} />
                                        <br />
                                        <input type="number" className="long" name="idNumber" placeholder={emp.empIdNumber} onChange={handleChange} />
                                        <br />
                                        <br />
                                        <input type="email" className="small" name="emailAddress" placeholder={emp.empEmailAddress} onChange={handleChange} />
                                        <input type="number" className="small" name="phoneNumber" placeholder={emp.empPhoneNumber} onChange={handleChange} />
                                        <br />

                                        <select name="position" onChange={handleChange}>
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
                                        <button onClick={updateEmp}>Update Employee</button>

                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className="column">
                        <div className="upEmp">
                            <h1>Employee</h1>
                            {
                                displayEmp.map((emp, index) => {
                                    return (
                                        <div key={index}>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <span>Name & Surname:</span>
                                                            <br />
                                                            {emp.empName + " " + emp.empSurname}
                                                        </td>
                                                        <td>
                                                            <span>Id Number:</span>
                                                            <br />
                                                            {emp.empIdNumber}
                                                        </td>
                                                        <td>
                                                            <span>Position:</span>
                                                            <br />
                                                            {emp.empPosition}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <span>Email Address:</span>
                                                            <br />
                                                            {emp.empEmailAddress}
                                                        </td>

                                                        <td colSpan={2}>
                                                            <span>Phone Number:</span>
                                                            <br />
                                                            {emp.empPhoneNumber}
                                                        </td>

                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>

                                    )
                                })
                            }

                            <button onClick={cancelUp}>Cancel Update</button>

                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}