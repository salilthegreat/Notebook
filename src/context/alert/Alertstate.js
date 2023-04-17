import AlertContext from "./alertContext";
import React,{useState} from "react";

const Alertstate = (props) =>{
    const [aMessage, setAmessage] = useState(null);
    const [aType, setAtype] = useState(null);
    const showAlert=(type,message)=>{
        setAtype(type)
        setAmessage(message)
        setTimeout(()=>{
            showAlert(null)
        },1500)
    } 
return(
    <AlertContext.Provider value={{showAlert,aType,aMessage}}>
        {props.children}
    </AlertContext.Provider>

)
}

export default Alertstate