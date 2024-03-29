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
        //auth token is fetched from the local storage which is set while sign up and log in
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify(), // body data type must match "Content-Type" header
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    console.log(json)
    //Notes are fetched and set
    setNotes(json)
  }


  //Add a Note
  const addNote = async (title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
      //below data are objects so must be stored in curly braces else wrong json error
      body: JSON.stringify({ title, description, tag })
    })
    const json = await response.json();
    //new note added to the list
    setNotes(notes.concat(json))
  }

  //Edit a Notes
  const editNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify({ title, description, tag })
    })
    const json = await response.json();
    console.log(json)

    //each note is fetched from the note array , one way of doing it
    // for (let i = 0; i < notes.length; i++) {
    //   const element = notes[i];
    //   //The element whose id matches that of the id to be edited will be edited 
    //   if (element._id === id) {
    //     element.title = title;
    //     element.description = description;
    //     element.tag = tag;
    //   }
    // }
    // getNotes()

    //Another way of doing itby @codewithharry
    //parsing the note after using stringify , else it will show the changes when refreshed , but here it shows instanly
    let newNote = JSON.parse(JSON.stringify(notes))
    for (let i = 0; i < newNote.length; i++) {
      let element = newNote[i];
      if (element._id === id) {
        newNote[i].title = title;
        newNote[i].description = description;
        newNote[i].tag = tag;
      }
    }
    setNotes(newNote)
  }

  //Delete Note
  //it takes id as input
  const deleteNote = async (id) => {
    //API call
    //id of the note is provided which will be  fetched from Noteitem.js
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      }
    })
    const json = await response.json()
    console.log(json)
    // console.log("deleting the note with id:" + id)
    //new notes are stored by filtering the notes and storing the one which don't have the given id 
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }


  return (
    //passing the state and different functions
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState