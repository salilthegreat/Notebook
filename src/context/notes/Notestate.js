import NoteContext from "./noteContext";
const NoteState = (props)=>{
    //s1 is a state
    let s1 = {
        "name" : "Salil",
        "class" : "10b",
    }
return(
    //Below code is used to send the values of the state
    <NoteContext.Provider value = {s1}>
    {props.children}
    </NoteContext.Provider>
    )

}
export default NoteState