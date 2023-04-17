import React,{useState,useContext} from 'react'
import { useNavigate } from "react-router-dom";
import alertContext from '../context/alert/alertContext';

const Login = (props) => {
    //After creating a context showAlert function is brought here using destructuring
    const alert = useContext(alertContext);
    let {showAlert} = alert
    //email and password set asblank 
    const [credential,setCredentila] = useState({email:"", password:""})
    const redirect = useNavigate()
    const host = "http://localhost:5000";
    //API call for existing user login
    const userLogin = async (email,password) =>{
        const response = await fetch(`${host}/api/auth/login`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email,password})
        })
        const json = await response.json();
        console.log(json)
        if(json.success){
            //if success is true then user id and password is correct because we set it that way. So redirect to notes and save the authtoken in local storage
            localStorage.setItem('token',json.authToken);
            redirect("/");
            //alert suppplied with type and message
            showAlert("success","Log in successfully")

        }else{
            showAlert("warning","Invalid Credentials")   
        }
    }
    const handleClicked=  (e)=>{
        e.preventDefault();
        userLogin(credential.email,credential.password);
        setCredentila({email:"", password:""});
    }
    const onChange = (e)=>{
setCredentila({...credential,[e.target.name]: e.target.value})
    }
    return (
        <div className='container my-4'>
            <h2>Login To iNotebook</h2>
            <form onSubmit={handleClicked}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name="email" value={credential.email} className="form-control" id="email" aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" value={credential.password} className="form-control" id="password" onChange={onChange} minLength={5} required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )

}

export default Login