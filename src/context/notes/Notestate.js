import NoteContext from "./noteContext";
import { useState } from 'react'
const NoteState = (props)=>{
    //s1 is a state
    let s1 = {
        "name" : "Salil",
        "class" : "10b",
    }
    //useState is used
    const [state,setState] = useState(s1)
    //State is changed using this function
    const update= () => {
        setTimeout(()=>{
            setState({
                "name" : "Bibek",
                "class" : "11A",
            })
        },1000);
    }
return(
    //Below code is used to send the values of the state
    // <NoteContext.Provider value = {s1}>
    // {props.children}
    // </NoteContext.Provider>

    //Here we are sending state with a function which will change it
        <NoteContext.Provider value = {{state,update}}>
        {props.children}
        </NoteContext.Provider>
    )

}
export default NoteState