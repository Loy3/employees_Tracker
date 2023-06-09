
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import MyNav from './MyNav';

import show from "../Assets/Icons/view.png";
import hide from "../Assets/Icons/hide.png";

export default function SignIn(props) {

    const navigate = useNavigate();

    const [admEmailA, setAdmEmailA] = useState('');
    const [admPass, setAdmPass] = useState('');
    const [showHidePassword, setShowHidePassword] = useState(false);


    function signInAdmin() {
        //setUserId(userId + 1);
        props.signInAdmin(admEmailA, admPass);

        navigate("/newEmp");
    }

    /*function toSignUp() {
       // navigate("/signup");
    }*/

    return (
        <div className="signin">
            <div className="row">
                <div className="column">

                    <MyNav />
                    <div className="container">
                        <div className="form">
                            <h1>
                                Welcome Back My Admin!
                            </h1>
                            <h3>Enter the fields below to get continue!</h3>
                            <br />

                            <input type="text" className="long" placeholder="Enter Email Address" onChange={(event) => setAdmEmailA(event.target.value)} />
                            <br />
                            <div className="myPassword">
                                <input type={showHidePassword ? "text" : "password"} className="long" placeholder={showHidePassword ? "Enter Password" : "* * * * * * * * * *"} onChange={(event) => setAdmPass(event.target.value)} />
                                <img
                                    title={showHidePassword ? "Hide password" : "Show password"}
                                    src={showHidePassword ? show : hide}
                                    onClick={() => setShowHidePassword(prevState => !prevState)}

                                    alt="Hide"
                                />
                            </div>

                            <button onClick={signInAdmin}>Sign In</button>



                            <br />
                            <p>Contact the the IT Department if you have a issue signing in</p>
                        </div>
                    </div>
                </div>

                <div className="column" id={"bg"}>

                </div>

            </div>
        </div>
    )


}