import React,{ useContext,useState } from 'react';
import NoteContext from '../context/notes/noteContext';
export const AddNote = () => {
    const context = useContext(NoteContext);
    const {addNote} = context;
    //a state is created to feed the values in to the addNote() from the inputs
    const [note,setNote] = useState ({title:" ",description:" ",tag:"default"})
    //Function to fetch the input values
    const onChange = (e) =>{
    //it says change nothing from the note except the change in these input and set it's value to the value of input provided by user
        setNote({...note,[e.target.name]:e.target.value})
    }
    //On click of button
    const handleCLicked = (e)=>{
        e.preventDefault();
    //values fetched from the inputs are given to the addNote() which will use them to create a new note
        addNote(note.title,note.description,note.tag)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="my-3">Add a Note</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title </label>
                            <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="text" className="form-control" id="description" name='description' onChange={onChange}/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={handleCLicked}>Add Note</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
