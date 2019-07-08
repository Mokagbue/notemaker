import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './notes.css'; 

function NotesList(props) {
    return (
        <div>
            <div className="navlinks">
                <NavLink  to="/newNotes" className="navlinks">New Note</NavLink>
                <NavLink  to="/home" className="navlinks">Home</NavLink>
            </div>
            <div  className="notesBody">
                <h1 className="home-title">The Wall</h1>
                <div className="note-wrap">
                    {props.notes.map((note, index) => (
                        <div key={index} className="note-card">
                            <Link to={`/notes/${note.id}`}>
                                <h3 className="note-title">{note.notes_title}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}
export default NotesList;