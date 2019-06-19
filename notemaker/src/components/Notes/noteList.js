import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Auth from '../../Auth/auth.js';
import axios from 'axios';

class NotesList extends Component {
        state = {
            notes: [],
        }
    componentDidMount() {
        this.grabAllNotes();
      }
    
      grabAllNotes = () => {
        console.log("getting notes?", this.state);
        axios.get('http://localhost:9000/api/notes/')
        .then(res => this.setState({ notes: res.data }))
        .catch(error => console.log(error));
      }
    //   makeNewNote = (note) => {
    //     axios.post('http://localhost:9000/api/notes', note)
    //     .then(response => this.grabAllNotes())
    //     .catch(error => console.log({ message:"failed to make new note", error}));
    //   }
      render() {
        return (
            <div className="list-wrap">
                <div className="navigation-box">
                    <nav className="nav">
                        <NavLink  to="/newNotes" className="navigation-buttons">New Note?</NavLink>
                    </nav>
                </div>
                <h1 className="home-title">NOTES</h1>
                <div className="note-wrap">
                        {this.state.notes.map((note, id) => (
                            <div key={id} className="note-card">
                                <Link to={`/notes/${note.id}`}>
                                    <h3 className="note-title">{note.notes_title}</h3>
                                </Link>
                            </div>
                        ))}
                </div>
            </div>
        );
    }
}
export default Auth(NotesList);