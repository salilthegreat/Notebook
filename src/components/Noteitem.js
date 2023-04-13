import React from 'react'
export const Noteitem = (props) => {
    //note fetched as props
    const note = props.note
    return (
                <div className="col-md-3">
                    <div className="card my-3" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">{note.title}</h5>
                            <p className="card-text">{note.description}</p>
                        </div>
                    </div>
                </div>
    )
}
