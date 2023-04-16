import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../context/notes/noteContext'
import { Noteitem } from './Noteitem';
import { AddNote } from './AddNote';

export const Notes = () => {
    //importing and using the noteContext
    const context = useContext(NoteContext);
    //destructurint the values from the context file 
    const { notes, getNotes, editNote } = context;
    //ureference variable declared
    const ref = useRef(null)
    const closeRef = useRef(null)
    //useEffect is used to execute the getNote function first time which will get notes from server
    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, [])

    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

    //update note will open the modal when called by making use of referce and will click the button when it will run
    const updateNote = (currentNote) => {
        ref.current.click();
        console.log(currentNote)
        //currentNote is the note we achived from Noteitem now we can set the values to the inputs values of the forms or new note which will be created
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    const handleClicked = (e) => {
        e.preventDefault();
        editNote(note.id, note.etitle, note.edescription, note.etag);
        //ref use to close the modal when update note is clicked
        closeRef.current.click()
    }

    return (
        <>
            <AddNote />
            {/* <!-- Button trigger modal --> */}
            {/* button set as reference point */}
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch Modal
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title </label>
                                    <input type="text" value={note.etitle} className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" value={note.edescription} className="form-control" id="edescription" name="edescription" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input  type="text" value={note.etag} className="form-control" id="etag" name="etag" onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={closeRef} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length < 5 || note.edescription.length < 5 || note.etag.length < 5} onClick={handleClicked} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2 className="my-3 me-2">Your Notes</h2>
                <div className="container m-auto">
                    {/* when no notes are available it will show this as message */}
                    {notes.length === 0 && "No notes to display"}
                </div>

                {/* Iteerating every element from the notes */}
                <div className="row">
                    {notes.map((note) => {
                        // noteitem for each note
                        return <Noteitem note={note} updateNote={updateNote} />
                    })}
                </div>
            </div>
        </>
    )
}
