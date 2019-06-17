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
        axios.get('/api/notes/')
        .then(res => this.setState({ notes: res.data }))
        .catch(error => console.log(error));
      }
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
                    <p>
                        {this.state.notes.map((note, index) => (
                            <div key={index} className="note-card">
                                <Link to={`/notes/${note.id}`}>
                                    <h3 className="note-title">{note.notes_title}</h3>
                                </Link>
                            </div>
                        ))}
                    </p>
                    
                </div>
            </div>
        );
    }
}
export default Auth(NotesList);