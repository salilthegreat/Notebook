import React, { useEffect } from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'
const About = () => {
  // Assigning the variable with the NoteContext value
  const a = useContext(NoteContext)
  //useEffect hook is used to run the function first time it works like componentDidMount
  useEffect(()=>{
    a.update();
    // eslint-disable-next-line
  },[])
  return (
    //Accessing the value using the variable
    // <div>About me : I am {a.name}, studying in class {a.class}</div>
    //Accesing the value from the object as both state and update function is passed
    <div>About me : I am {a.state.name}, studying in class {a.state.class}</div>
  )
}

export default About