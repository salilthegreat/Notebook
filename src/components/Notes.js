import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'
import { Noteitem } from './Noteitem';

export const Notes = () => {
    //importing and using the noteContext
    const context = useContext(NoteContext);
    //destructurint the values from the context f
    // eslint-disable-next-line
    const { notes, setNotes } = context;
    return (
        <div className="container">
            <h2 className="my-3">Your Notes</h2>
            {/* Iteerating every element from the notes */}
            <div className="row">
                    {notes.map((note) => {
                        //noteitem for each note
                        return <Noteitem note={note} />
                    })}
            </div>
        </div>
    )
}
