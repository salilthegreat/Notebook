import React, { useContext } from 'react'
import alertContext from '../context/alert/alertContext';
const Alert = (props) =>{
    const {aType,aMessage} = useContext(alertContext)
    const capitalize = (text) =>{
        const lower = text.toLowerCase();
        return lower[0].toUpperCase() + lower.slice(1)
    }
    return(
        <div style={{height:"50px"}}>
            {aType && <div className={`alert fade show alert dismissible alert-${aType}`} role='alert'>
                <strong>{capitalize(aType)}</strong>:{aMessage}
                </div>}
        </div>
    )
}

export default Alert