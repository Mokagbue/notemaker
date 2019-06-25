import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import Auth from '../../Auth/auth.js';
import './notes.css'; 

function NotesList(props) {
    return (
        <div className="notesBody">
            <NavLink  to="/newNotes" className="navlinks">New</NavLink>
            &nbsp;|&nbsp;
            <NavLink  to="/home" className="navlinks">Home</NavLink>
            <h1 className="home-title">My Notes!</h1>
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
    )
}
export default NotesList;