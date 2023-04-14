import NoteContext from "./noteContext";
import { useState } from 'react'
const NoteState = (props)=>{
//hardcoding some initial note values
const notesInitial = [
    {
      "_id": "6435e3bcd23bbfaeddb4eff6",
      "user": "64326219018bffe34d481341",
      "title": "What To Do",
      "description": "Find a way",
      "tag": "Heart",
      "__v": 0
    },
    {
      "_id": "6435e6acd23bbfaeddb4effa",
      "user": "64326219018bffe34d481341",
      "title": "What will happen",
      "description": "Who knows,you will also never know, if you don't even try.Give your best.",
      "tag": "Prsonal",
      "__v": 0
    },
    {
      "_id": "64364ac69457c39bf99dbb32",
      "user": "64326219018bffe34d481341",
      "title": "Don't think , Act",
      "description": "Just do what the situation demands you to do.You will comeout strong.Do your best",
      "tag": "Prsonal",
      "__v": 0
    },
    {
      "_id": "64370d023268d96f568a7461",
      "user": "64326219018bffe34d481341",
      "title": "What will happen",
      "description": "Who knows,you will also never know, if you don't even try.Give your best.",
      "tag": "Prsonal",
      "__v": 0
    },
    {
      "_id": "64370e880ee79518cf5e015c",
      "user": "64326219018bffe34d481341",
      "title": "Shoul i wait?",
      "description": "What else you can do, you have to wait.What else can you do?",
      "tag": "Prsonal",
      "__v": 0
    },
    {
      "_id": "6435e3bcd23bbfaeddb4eff6",
      "user": "64326219018bffe34d481341",
      "title": "What To Do",
      "description": "Find a way",
      "tag": "Heart",
      "__v": 0
    },
    {
      "_id": "6435e6acd23bbfaeddb4effa",
      "user": "64326219018bffe34d481341",
      "title": "What will happen",
      "description": "Who knows,you will also never know, if you don't even try.Give your best.",
      "tag": "Prsonal",
      "__v": 0
    },
    {
      "_id": "64364ac69457c39bf99dbb32",
      "user": "64326219018bffe34d481341",
      "title": "Don't think , Act",
      "description": "Just do what the situation demands you to do.You will comeout strong.Do your best",
      "tag": "Prsonal",
      "__v": 0
    }
  ]
  //creating a state of note
  const [notes,setNotes] = useState(notesInitial)

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
  const editNote = ()=>{
    
  }

  //Delete Note
  //it takes id as input
  const deleteNote = (id)=>{
    console.log("deleting the note with id:" + id)
    //new notes are stored by filtering the notes and storing the one which don't have the given id 
    const newNotes = notes.filter((note)=>{return note._id !== id})
    setNotes(newNotes)
  }


return(
    //passing the state and different functions
        <NoteContext.Provider value = {{notes,addNote,deleteNote,editNote}}>
        {props.children}
        </NoteContext.Provider>
    )

}
export default NoteState