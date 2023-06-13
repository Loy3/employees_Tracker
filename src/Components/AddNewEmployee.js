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
        console.log("res0", empImage);
        console.log(empIdNumber, empName, empSurname, empEmailAddress, empPosition, empPhoneNumber, empImage);
        // setEmpIdNumber(empIdNumber + 1);
        props.addnewEmployee(empIdNumber, empName, empSurname, empEmailAddress, empPosition, empPhoneNumber, empImage);

    }

    let base64String = "";

    function imageSet(event) {
        /* if (event.target.files && event.target.files[0]) {
             setEmpImage(URL.createObjectURL(event.target.files[0]));
         }
         console.log(empImage);*

        var img = event;
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        var dataURL = canvas.toDataURL("image/png");

        setEmpImage(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));*




        document.getElementById('file').addEventListener('change', (e) => {
            console.log(e.target.files[0])
             const file = e.target.files[0];
             const reader = new FileReader();
            
            reader.onloadend = () => {
                const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
                
                //setEmpImage(base64String);
                // document.body.style.background = `url(data:image/png;base64,${base64String})`;
            };
            reader.readAsDataURL(file);

            console.log("reader.readAsDataURL(file)")
        })*/
        //console.log(document.getElementById('file'));

        /*
                let file = event.target.files[0];
        
                let reader = new FileReader();
                console.log("next");
        
                reader.onload = function () {
                    base64String = reader.result.replace("data:", "")
                        .replace(/^.+,/, "");
        
                    const saveToLoc = [
                        {
                            empEmailAddress: empEmailAddress,
                            image: base64String
                        }
                    ];
                    localStorage.setItem("images", JSON.stringify(base64String));
                    //setEmpImage(base64String);
        
                    // alert(imageBase64Stringsep);
                    console.log(base64String);
                }
                reader.readAsDataURL(file);
        
                /* const imgPath = event.target.files[0];
                 const reader = new FileReader();
         
                 reader.addEventListener("load", function () {
                     // convert image file to base64 string and save to localStorage
                     base64String = reader.result;
                 }, false);
         
                 if (imgPath) {
                     reader.readAsDataURL(imgPath);
                     setEmpImage(base64String);
                 }
         */

        /*const preview = document.querySelector("#preview");
         const files = event.files;
 
         function readAndPreview(file) {
             // Make sure `file.name` matches our extensions criteria
             if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
                 const reader = new FileReader();
 
                 reader.addEventListener(
                     "load",
                     () => {
                         const image = new Image();
                         image.height = 100;
                         image.title = file.name;
                         base64String = reader.result;
                         preview.appendChild(image);
                        
                     },
                     false
                 );
                 
                 reader.readAsDataURL(file);
             }
         }
 
         if (files) {
             Array.prototype.forEach.call(files, readAndPreview);
         }
 
         console.log(base64String);*/

        //const preview = document.querySelector("img");
        /*const file = event.target.files[0];
        const reader = new FileReader();

        reader.addEventListener(
            "load",
            () => {
                // convert image file to base64 string
                base64String = reader.result;
            },
            false
        );

        if (file) {
            reader.readAsDataURL(file);
        }
        console.log(base64String);*/
        if (event.target.files && event.target.files[0]) {
            base64String = URL.createObjectURL(event.target.files[0]);
            console.log(event.target.files[0].size)
        }

        if (event.target.files[0].size > 1000000) {
            document.getElementById("message").style.color = "red";
        } else {
            document.getElementById("message").style.color = "grey";
            toDataURL(base64String, function (dataUrl) {
                console.log('RESULT:', dataUrl)
                setEmpImage(dataUrl);
                localStorage.setItem("images", JSON.stringify(dataUrl));
            })

        }

    }

    function toDataURL(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var reader = new FileReader();
            reader.onloadend = function () {
                callback(reader.result);
            }
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
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
                            <input type="file" id={'file'} className="long" placeholder="Enter Employee's Image" onChange={imageSet} />
                            <p id={"message"}><i>Add a image that is lower then 1mb</i></p>
                            <br />

                            <br />
                            <button onClick={addnewEmployee}>Add Employee</button>

                            <br />
                            <br />
                            <p>Want to view employess? <a href="" onClick={toView}>Click here</a> To view.</p>
                        </div>
                    </div>

                </div>
                <div className="column" id={"bg"}></div>

            </div>

        </div>
    )
}

//<input type="text" className="long" placeholder="Enter Employee's Position" onChange={(event) => setEmpPosition(event.target.value)} />