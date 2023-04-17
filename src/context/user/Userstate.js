//This is a great piece of work for me although i wasn't able to use useNavigate() in context that's what failed here else the code is gold. iIt works for login but redirecting dosen't work so i stopped after loads of failed attempts
import UserContext from "./userContext";
import React,{ useState } from "react";
const Userstate =  (props) =>{
    const host = "http://localhost:5000";
    const [success, setsuccess] = useState("false")
    //API call for existing user login
    const login = async (email,password) =>{
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
            setsuccess("true")
        }else{
            alert("Invalid Credentials")   
        }
    }
    return(
        //the values are supplied from here & can be used in places of need
        <UserContext.Provider value= {{login,success}} >
            {props.children}
        </UserContext.Provider>
    )
}
export default Userstate