import React, { useContext, useState } from 'react';
import NoteContext from '../context/notes/noteContext';
export const AddNote = () => {
    const context = useContext(NoteContext);
    const { addNote } = context;
    //a state is created to feed the values in to the addNote() from the inputs
    // const [note,setNote] = useState ({title:" ",description:" ",tag:" "})
    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    //Function to fetch the input values
    const onChange = (e) => {
        //it says change nothing from the note except the change in these input and set it's value to the value of input provided by user
        setNote({ ...note, [e.target.name]: e.target.value });

    }
    //On click of button
    const handleClicked = (e) => {
        e.preventDefault();
        //values fetched from the inputs are given to the addNote() which will use them to create a new note
        // console.log(note.title);
        addNote(note.title, note.description, note.tag);
        //values are revert back to normal so that the input can be supplied with these values and become empty when add button clicked
        setNote({ title: "", description: "", tag: "" })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="my-3">Add a Note</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title </label>
                            <input type="text" value={note.title} className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="text" value={note.description} className="form-control" id="description" name="description" onChange={onChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tag" className="form-label">Tag</label>
                            <input type="text" value={note.tag} className="form-control" id="tag" name="tag" onChange={onChange} />
                        </div>
                        {/* min length propert can't be set bcz the button is'nt submit and the inputs have onChange,using disabled we set the minimum limit for each element */}
                        <button disabled={note.title.length < 5 || note.description.length < 5 || note.tag.length < 5} type="submit" className="btn btn-primary" onClick={handleClicked}>Add Note</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
