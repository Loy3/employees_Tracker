import logo from "../Assets/Icons/businessman.png";
import { useNavigate } from "react-router-dom";

export default function MyNav() {
    const navigate = useNavigate();

    function toView() {
        navigate("/employee");
    }

    function toAdd(){
        navigate("/");
    }

    return (
        <nav>
            <div className='nav-wrap'>

                <div className="topnav" id="myTopnav">
                    <div className="row">
                        <div className='column1'>
                            <div className="topnav-left">
                                <img src={logo} alt="Logo" width={50} />
                            </div>
                        </div>
                        <div className='column3'>
                            <div className="topnav-right">
                                <button>Sign Out</button>
                            </div>
                        </div>
                        <div className='column2'>
                            <div className="topnav-center" id="topnav-center" align="center">
                                <a href='' onClick={toAdd}>Add Employee</a>
                                <a href='' onClick={toView}>View Employee</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </nav >


    );
}

/*
 <div className="signin-nav">

            <table>
                <tbody>
                    <tr>
                        <td>
                            
                        </td>
                        <td>
                            <h2>Employee App</h2>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        */