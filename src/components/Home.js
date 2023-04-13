import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'
const Home = () => {
  //importing and using the noteContext
  const context = useContext(NoteContext);
  //destructurint the values from the context for array [ , ] and for object { , } else error 
  // eslint-disable-next-line
  const {notes,setNotes}= context;
  
  return (
    <div>
      <div className="container">
        <h2 className="my-3">Add Note</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <div className="container">
        <h2 className="my-3">Your Notes</h2>
        {/* Iteerating every element from the notes */}
        {notes.map((note)=>{
          return note.title;
        })}
        </div>
    </div>
  )
}
export default Home
