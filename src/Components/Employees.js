import "../App.css";
//import React, { Component } from "react";
import MyNav from "./MyNav";
import image from "../Assets/Potraits/4.png";
import trash from "../Assets/Icons/trash.png";
import edit from "../Assets/Icons/editing.png";

import { useState } from "react";


export default function Employees(props) {
    /*function display() {


        const stringifiedEmp = localStorage.getItem('employees');
        const personAsObjectAgain = JSON.parse(stringifiedEmp);
        console.log(personAsObjectAgain);
    }

    return (
        <>
            {display}
        </>
    )*/


    const stringifiedEmp = localStorage.getItem('employees');
    let employees = JSON.parse(stringifiedEmp);
    console.log(employees);

    const stringifiedDEmp = localStorage.getItem('employee');
    let displayEmp = JSON.parse(stringifiedDEmp);
    console.log(displayEmp);

    let employee = [];


    const [idNumber, setIdNumber] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [position, setPosition] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [searchEmp, setSearchEmp] = useState('');

    const [idNum, setId] = useState(0);
    const [compMail, setComMail] = useState('');

    const [message, setMessage] = useState('');

    function search() {
        console.log(employees);
        console.log(searchEmp);

        for (let e = 0; e < employees.length; e++) {

            if (searchEmp === employees[e].empEmailAddress) {
                console.log(employees[e].empEmailAddress);
                setMessage("Found");
                window.alert(searchEmp + " was found!");

            } /*else {
                setMessage("Not Found");
            }
*/
        }

    }


    return (
        <div className="display">
            <MyNav />
            <div className="content" id={"content"}>

                <h1>Employess: <span>{employees.length} users</span></h1>
                <br />

                <div className="search">
                    <input type="text" className="long" placeholder="Enter email address to search" onChange={(event) => setSearchEmp(event.target.value)} />
                    <button onClick={search}>Search</button>
                    <br />
                    {message}
                </div>

                <div className="row" id={"myCards"}>
                    {employees.map((data, index) => (

                        <div className="column" key={index} >
                            <div className="card">

                                <div className="row" id={"step1"}>
                                    <div className="column">
                                        <img src={image} alt='Employee' width={100} />
                                    </div>
                                    <div className="column">
                                        <h4>{data.empName + " " + data.empSurname}</h4>
                                        <h4>ID: {data.empIdNumber}</h4>
                                    </div>
                                    <div className="column" id={"align-right"}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <button onClick={event => update(event, data, index, data.empEmailAddress)}>
                                                            <img src={edit} alt="Edit" width={25} title="Edit" />
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button onClick={event => deleteEmployee(event, index)}>
                                                            <img src={trash} alt="Delete" width={25} title="Delete" />

                                                        </button>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="row" id={"step2"}>
                                    <div className="column">
                                        <h4>Email:
                                            <br /><span>{data.empEmailAddress}</span></h4>
                                    </div>
                                    <div className="column">
                                        <h4>Contact #:
                                            <br /><span>{data.empPhoneNumber}</span></h4>
                                    </div>
                                    <div className="column">
                                        <h4>Position:
                                            <br /><span>{data.empPosition}</span></h4>
                                    </div>


                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="content" id={"update"}>

                <div className="row">
                    <div className="column">
                        <div className="update" >
                            <h1>Update</h1>
                            <h3>Update Employee</h3>


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

        </div>
    )



    function deleteEmployee(event, index) {

        employees.splice(index, 1);
        console.log(employees);
        localStorage.setItem('employees', JSON.stringify(employees));

        window.location.reload(false);
        console.log(event);
        console.log(employees);


    }

    function update(event, data, index, employeeEmail) {
        document.getElementById("update").style.display = "block";
        document.getElementById("content").style.display = "none";

        setId(index);
        employee = [data];
        localStorage.setItem("employee", JSON.stringify(employee));

        setComMail(employeeEmail);
        console.log(employee);

    }

    function updateEmp() {

        document.getElementById("content").style.display = "block";
        console.log(idNum);
        console.log(compMail);

        for (let i = 0; i < employees.length; i++) {
            if (compMail === employees[i].empEmailAddress) {
                setId(i);
            }
        }

        console.log(idNum);

        console.log(employees[idNum]);


        if (name === "") {
            setName(employees[idNum].empName);
        } else {
            setName(name);
        }

        if (surname === "") {
            setSurname(employees[idNum].empSurname);
        } else {
            setSurname(surname);
        }

        if (idNumber === "") {
            setIdNumber(employees[idNum].empIdNumber);
        } else {
            setId(idNumber);
        }

        if (emailAddress === "") {
            setEmailAddress(employees[idNum].empEmailAddress);
        } else {
            setEmailAddress(emailAddress);
        }

        if (phoneNumber === "") {
            setPhoneNumber(employees[idNum].empPhoneNumber);
        } else {
            setIdNumber(phoneNumber);
        }

        if (position === "") {
            setPosition(employees[idNum].empPosition);
        } else {
            setPosition(position);
        }

        employees[idNum].empName = name;
        employees[idNum].empSurname = surname;
        employees[idNum].empIdNumber = idNumber;
        employees[idNum].empEmailAddress = emailAddress;
        employees[idNum].empPhoneNumber = phoneNumber;
        employees[idNum].empPosition = position;

        console.log(employees[idNum]);
        localStorage.setItem('employees', JSON.stringify(employees));

        window.location.reload(false);

    }

    function cancelUp() {
        document.getElementById("update").style.display = "none";
        document.getElementById("content").style.display = "block";
    }

}



/*export default class Employees extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeesData: []
        };
    }

    displyEmployees() {
        let url = "http://localhost:3001/employeesData";

        fetch(url).then(res => res.json()).then((data) => {

            let employees = data.map((employee, index) => {
                console.log("employee");
                return (

                    <div key={index}>

                        <h3>{employee.empName + " " + employee.empSurname}</h3>

                        <p>
                            Employee ID: {employee.empIdNumber}
                            <br />
                            Employee Email Address: {employee.empEmailAddress}
                            <br />
                            Employee Position: {employee.empPosition},
                            <br />
                            Employee Phone Number: {employee.empPhoneNumber}

                        </p>

                        <img src={require(`.${employee.empImage}`)} alt='Employee' width={100} />

                    </div>
                )

            })

            this.setState({ employeesData: employees });

        })
    }

    render() {
        return (
            <div>
                fdghfh
                {this.state.employeesData}
            </div>
        )
    }
}*/

/*
//let myData = data;
        /* Object.keys(employee).forEach(key => employeeArr.push({
             name: key,
             rating: employee[key]
         }));*/
        //employeeArr = Object.values(employee);

/*employee = employees[index];

/*Object.keys(myData).map(key => {
    return myData[key];
})*/
/*Object.keys(employee).forEach((key) => {
    employeeArr.push({
    variable: key,
    about: employee[key]
  })
});*/