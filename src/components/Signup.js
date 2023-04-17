import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    const host = "http://localhost:5000"
    const redirect = useNavigate();
    const [credential,setCredentila] = useState({name:"",email:"",password:""})
    const onChange = (e) =>{
       setCredentila({...credential,[e.target.name]:e.target.value}) 
    }
    const handleClick = (e) =>{
        e.preventDefault();
        console.log(credential)
        Signup(credential.name,credential.email,credential.password)
    }
    //Api call for signup form
    const Signup = async (name,email,password) =>{
        const response = await fetch(`${host}/api/auth/createuser`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name,email,password})
        })
        const json = await response.json();
        console.log(json)
        if(json.success){
            localStorage.setItem('token',json.authToken);
            redirect("/")
        }else{
            alert("Set right credenttilas")
        }
    }
    return (
        <div className='container'>
            <form onSubmit={handleClick}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" value={credential.name} name="name" className="form-control" id="name" aria-describedby="name" onChange={onChange} minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" value={credential.email} className="form-control" id="email" aria-describedby="email"onChange={onChange} name="email"  minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" value={credential.password} name="password" className="form-control" id="password" onChange={onChange} minLength={5} required/>
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    )
}

export default Signup