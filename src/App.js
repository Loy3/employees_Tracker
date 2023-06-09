import './App.css';
import { useEffect, useState } from 'react';
//import SignIn from './Components/SignIn';<SignIn signInAdmin={adminsign} />
import AddNewEmployee from './Components/AddNewEmployee';

//import Employees from './Components/Employees';<Employees />

function App() {
  //Admin Sign in
  /*const [adminSignIn, setadminSignIn] = useState([]);
  //admId,
  const adminsign = (admEmailA, admPass) => {
    setadminSignIn((adminSignIn) => [...adminSignIn, { admEmailA: admEmailA, admPass: admPass }]);
    console.log(adminSignIn);
  }
**/
  //Add new Employee
  const stringifiedEmp = localStorage.getItem('employees');
  let employees = JSON.parse(stringifiedEmp);
  const [newEmployee, setEmployee] = useState(employees);

  const employee = (empIdNumber, empName, empSurname, empEmailAddress, empPosition, empPhoneNumber, empImage) => {
    setEmployee((newEmployee) => [...newEmployee, { empIdNumber: empIdNumber, empName: empName, empSurname: empSurname, empEmailAddress: empEmailAddress, empPhoneNumber: empPhoneNumber, empPosition: empPosition, empImage: empImage }]);
    console.log(newEmployee);

  }

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(newEmployee))
  }, [newEmployee])


  return (
    <div className="App">
      <AddNewEmployee addnewEmployee={employee} />
    </div>
  );
}

export default App;
