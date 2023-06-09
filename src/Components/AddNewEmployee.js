import { useState } from "react";
//import { useNavigate } from "react-router-dom";

import MyNav from "./MyNav";
import { useNavigate } from "react-router-dom";

export default function AddNewEmployee(props) {
    const navigate = useNavigate();

    const [empIdNumber, setEmpIdNumber] = useState('');
    const [empName, setEmpName] = useState('');
    const [empSurname, setEmpSurname] = useState('');
    const [empEmailAddress, setEmpEmailAddress] = useState('');
    const [empPosition, setEmpPosition] = useState('');
    const [empPhoneNumber, setEmpPhoneNumber] = useState('');
    const [empImage, setEmpImage] = useState('');


    function addnewEmployee() {
        console.log(empIdNumber, empName, empSurname, empEmailAddress, empPosition, empPhoneNumber, empImage);
        // setEmpIdNumber(empIdNumber + 1);
        props.addnewEmployee(empIdNumber, empName, empSurname, empEmailAddress, empPosition, empPhoneNumber, empImage);
    }



    function imageSet(event) {
        if (event.target.files && event.target.files[0]) {
            setEmpImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    function toView() {
        navigate("/employee");
    }

    return (
        <div className="add-Employee">
            <div className="row">
                <div className="column">
                    <MyNav />

                    <div className="container">
                        <div className="form">
                            <h1>New Employee</h1>
                            <h3>Enter the fields below to get started!</h3>

                            <br />

                            <input type="text" className="small" placeholder="Enter Employee's First Name" onChange={(event) => setEmpName(event.target.value)} />
                            <input type="text" className="small" placeholder="Enter Employee's Last Name" onChange={(event) => setEmpSurname(event.target.value)} />
                            <br />
                            <input type="number" className="long" placeholder="Enter Employee's ID Number" onChange={(event) => setEmpIdNumber(event.target.value)} />
                            <br />
                            <br />
                            <input type="email" className="small" placeholder="Enter Employee's Email Address" onChange={(event) => setEmpEmailAddress(event.target.value)} />
                            <input type="number" className="small" placeholder="Enter Employee's Phone Number" onChange={(event) => setEmpPhoneNumber(event.target.value)} />
                            <br />

                            <select onChange={(event) => setEmpPosition(event.target.value)}>
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
                            <input type="file" className="long" placeholder="Enter Employee's Image" onChange={imageSet} />
                            <br />

                            <br />
                            <button onClick={addnewEmployee}>Add Employee</button>

                            <br />
                            <br />
                            <p>Want to view employess? <a href='' onClick={toView}>Click here</a> To view.</p>
                        </div>
                    </div>

                </div>
                <div className="column" id={"bg"}></div>

            </div>

        </div>
    )
}

//<input type="text" className="long" placeholder="Enter Employee's Position" onChange={(event) => setEmpPosition(event.target.value)} />