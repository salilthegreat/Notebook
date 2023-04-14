import React,{ useContext} from 'react'
import NoteContext from '../context/notes/noteContext'
export const Noteitem = (props) => {
    const context = useContext(NoteContext);
    //Delete note is imported from noteContext
    const {deleteNote} = context;
    //note fetched as props
    const note = props.note
    return (
                <div className="col-md-3">
                    <div className="card card-sm my-3 " >
                        <div className="card-body">
                        <div className="d-flex align-items-center ">
                        <h5 className="card-title  m-0">{note.title}</h5>
                        {/* deleteNote will be triggered on click and note id is provided as parameter */}
                            <i className="fa fa-sharp fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                            <i className="fa fa-edit mx-2"></i>
                        </div>   
                            <p className="card-text my-2">{note.description}</p>
                        </div>
                    </div>
                </div>
    )
}
