import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/noteContext'
import { Noteitem } from './Noteitem';
import { AddNote } from './AddNote';

export const Notes = () => {
    //importing and using the noteContext
    const context = useContext(NoteContext);
    //destructurint the values from the context file 
    const {notes,getNotes} = context;
    //useEffect is used to execute the getNote function first time which will get notes from server
    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, [])
    
    return (
        <>
            <AddNote />
            <div className="container">
                <h2 className="my-3 me-2">Your Notes</h2>
                {/* Iteerating every element from the notes */}
                <div className="row">
                    {notes.map((note) => {
                        // noteitem for each note
                        return <Noteitem note={note} />
                    })}
                </div>
            </div>
        </>
    )
}
