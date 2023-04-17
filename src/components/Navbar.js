import React, { useEffect,useContext } from 'react'
import {Link, useLocation,useNavigate} from "react-router-dom"
import alertContext from '../context/alert/alertContext';
const Navbar = () => {
    const redirect = useNavigate();
    const alert = useContext(alertContext);
    const{showAlert} = alert;
    //function to run when logout button is clicked
    const handleLogout = () =>{
        //first remove the token from the local storage then no authentication is possible
        localStorage.removeItem('token');
        //at the same time redirect him to login so, unless he logins , he can't see any notes
        redirect("/login");
        showAlert("success","Logout Successfully")
    }
    //location hook used to check the location and set some values,like highlighting the nav links when clicked
    let location = useLocation();
    useEffect(()=>{
        console.log(location.pathname)
    },[location])
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                   <Link className="navbar-brand" to="/">iNotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                               <Link className={`nav-link ${location.pathname === "/"? "active" : ""} `} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                               <Link className={`nav-link ${location.pathname === "/about"? "active" : ""} `} to="/about">About</Link>
                            </li>
                        </ul>
                        {/* if the token is not present then show login and sign up button else show the log out button  */}
                        {!localStorage.getItem('token') ? <form className="d-flex" role="search">
                            <Link type='button' className='btn btn-primary mx-1 rounded' to="/login">Login</Link>
                            <Link type='button' className='btn btn-primary mx-1 rounded' to="/signup">Signup</Link>
                        </form> : <button type='button' onClick={handleLogout} className='btn btn-primary'>Logout</button> }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar