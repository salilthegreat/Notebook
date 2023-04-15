import NoteContext from "./noteContext";
import { useState } from 'react'

const NoteState = (props) => {

  const host = "http://localhost:5000"

  //creating a state of note
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  //Fetch all notes
  const getNotes = async () => {
    //API calls made to fetch notes
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzMjYyMTkwMThiZmZlMzRkNDgxMzQxIn0sImlhdCI6MTY4MTI0NDg1N30.YH9ipmOC60IPSiDTJzaw9zRZivXUnXOdYVl-8aoe5Oo"
      },
      body: JSON.stringify(), // body data type must match "Content-Type" header
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    console.log(json)
    //Notes are fetched and set
    setNotes(json)
  }


//Add a Note
  const addNote = ( title,description,tag)=>{
    
    //note is hardcoded but later it will be added by api
    const note = {
      "_id": "6435e3bcd23bbfaeddb4eff7",
      "user": "64326219018bffe34d481349",
      "title": title,
      "description": description,
      "tag": "Fiery Resolve",
      "__v": 0
    }

    //to add notes to the list of notes already present
  setNotes(notes.concat(note))
}

//Edit a Notes
const editNote = (id, title, description, tag) => {
  //API call

  //each note is fetched from the note array
  for (let i = 0; i < notes.length; i++) {
    const element = notes[i];
    //The element whose id matches that of the id to be edited will be edited
    if (element._id === id) {
      element.title = title;
      element.description = description;
      element.tag = tag;
    }
  }
}

//Delete Note
//it takes id as input
const deleteNote = async (id) => {
  const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
    method: "DELETE",
    headers:{
      "Content-Type":"application/json",
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQzMjYyMTkwMThiZmZlMzRkNDgxMzQxIn0sImlhdCI6MTY4MTI0NDg1N30.YH9ipmOC60IPSiDTJzaw9zRZivXUnXOdYVl-8aoe5Oo"
    }
  })
  const json = await response.json()
  console.log(json)
  console.log("deleting the note with id:" + id)
  //new notes are stored by filtering the notes and storing the one which don't have the given id 
  const newNotes = notes.filter((note) => { return note._id !== id })
  setNotes(newNotes)
}


return (
  //passing the state and different functions
  <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>
    {props.children}
  </NoteContext.Provider>
)

}
export default NoteState