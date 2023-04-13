import React from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'
const About = () => {
  // Assigning the variable with the NoteContext value
  const a = useContext(NoteContext)
  return (
    //Accessing the value using the variable
    <div>About me : I am {a.name}, studying in class {a.class}</div>
  )
}

export default About