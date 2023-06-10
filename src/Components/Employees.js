import "../App.css";
//import React, { Component } from "react";
import MyNav from "./MyNav";
import image from "../Assets/Potraits/4.png";
import trash from "../Assets/Icons/trash.png";
import edit from "../Assets/Icons/editing.png";

import { useState } from "react";

import { useNavigate } from "react-router-dom";


export default function Employees(props) {
    const navigate = useNavigate();
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

    let employees = "";
    //let displayEmp = [];
    const stringifiedEmp = localStorage.getItem('employees');
    if (stringifiedEmp === "" || stringifiedEmp === null) {
        localStorage.setItem('employees', JSON.stringify(null));
        navigate("/");
    } else {
        employees = JSON.parse(stringifiedEmp);
    }
    /*
        const stringifiedDEm = localStorage.getItem('employee');
        if (stringifiedDEm === "" || stringifiedDEm === null) {
            localStorage.setItem('employee', JSON.stringify(""));
        } else {
            displayEmp = JSON.parse(stringifiedDEm);
        }
        
        console.log(displayEmp);
    */
    console.log(employees);
    let employee = [{}];


    const [user, setUser] = useState({
        idNumber: '',
        name: '',
        surname: '',
        emailAddress: '',
        position: '',
        phoneNumber: '',
    });

    const [searchEmp, setSearchEmp] = useState('');

    const [idNum, setId] = useState(0);
    const [compMail, setComMail] = useState('');


    function search() {
        console.log(employees);
        console.log(searchEmp);

        for (let e = 0; e < employees.length; e++) {

            if (searchEmp === employees[e].empEmailAddress) {
                setUser({
                    idNumber: employees[e].empIdNumber,
                    name: employees[e].empName,
                    surname: employees[e].empSurname,
                    emailAddress: employees[e].empEmailAddress,
                    position: employees[e].empPosition,
                    phoneNumber: employees[e].empPhoneNumber,
                })

                document.getElementById("all").style.display = "none";
                document.getElementById("searched").style.display = "block";

            } /*else {
                setMessage("Not Found");
            }
*/
        }
        console.log(employee);


    }

    function back() {
        document.getElementById("all").style.display = "block";
        document.getElementById("searched").style.display = "none";
    }

    function deleteEmployee(event, index) {

        employees.splice(index, 1);
        console.log(employees);
        localStorage.setItem('employees', JSON.stringify(employees));

        window.location.reload(false);
        console.log(event);
        console.log(employees);


    }

    function update(event, data, index, employeeEmail) {

        setId(index);
        console.log(idNum)
        employee = [data];
        localStorage.setItem("employee", JSON.stringify(employee));
        localStorage.setItem("employeeID", JSON.stringify(idNum));
        navigate("/update");

        setComMail(employeeEmail);
        console.log(compMail);
        console.log(employee);



    }


    return (
        <div className="display">
            <MyNav />
            <div className="content" id={"content"}>

                <h1>Employess: <span>{employees.length} users</span></h1>
                <br />

                

                <div id={"all"}>
                <div className="search">
                    <input type="text" className="long" placeholder="Enter email address to search" onChange={(event) => setSearchEmp(event.target.value)} />
                    <button onClick={search}>Search</button>
                    <br />
                </div>
                    <div className="row" id={"myCards"}>
                        {employees.map((data, index) => (

                            <div className="column" key={index} >
                                <div className="card">

                                    <div className="row" id={"step1"}>
                                        <div className="column" >
                                            <img src={image} alt='Employee' width={100} />
                                        </div>
                                        <div className="column" id={"align-right"}>
                                            <div>
                                                <h4>{data.empName + " " + data.empSurname}</h4>
                                                <h4>Contact #:
                                                    <br /><span>{data.empPhoneNumber}</span></h4>
                                            </div>
                                        </div>
                                        <div className="column" id={"align-right"}>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <button onClick={event => update(event, data, index, data.empEmailAddress)}>
                                                                <img src={edit} alt="Edit" width={20} title="Edit" />
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button onClick={event => deleteEmployee(event, index)}>
                                                                <img src={trash} alt="Delete" width={20} title="Delete" />

                                                            </button>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="row" id={"step2"}>
                                        <div className="column">
                                            <h4> ID Number: <span>{data.empIdNumber}</span></h4>

                                        </div>
                                        <div className="column">
                                            <h4>Email:
                                                <br /><span>{data.empEmailAddress}</span></h4>
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

                <div id={"searched"}>

                    <div className="row" id={"myCards"}>


                        <div className="column" >
                            <div className="card">

                                <div className="row" id={"step1"}>
                                    <div className="column" >
                                        <img src={image} alt='Employee' width={100} />
                                    </div>
                                    <div className="column" id={"align-right"}>
                                        <div>
                                            <h4>{user.name + " " + user.surname}</h4>
                                            <h4>Contact #:
                                                <br /><span>{user.phoneNumber}</span></h4>
                                        </div>
                                    </div>

                                </div>

                                <div className="row" id={"step2"}>
                                    <div className="column">
                                        <h4> ID Number: <span>{user.idNumber}</span></h4>

                                    </div>
                                    <div className="column">
                                        <h4>Email:
                                            <br /><span>{user.emailAddress}</span></h4>
                                    </div>
                                    <div className="column">
                                        <h4>Position:
                                            <br /><span>{user.position}</span></h4>
                                    </div>


                                </div>

                            </div>
                        </div>

                    </div>
                    <button onClick={back}>Back</button>
                </div>
            </div>
        </div>
    )
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