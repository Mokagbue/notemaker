import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios';

class NotesList extends Component {
    constructor() {
        super();
        this.state = {
            notes: [],
        }
    };
    componentDidMount() {
        this.grabAllNotes();
      }
    
      grabAllNotes = () => {
        console.log("getting notes?", this.state);
        axios.get('http://localhost:9000/api/notes/:id/users')
        .then(response => this.setState({ ...this.state, notes: response.data }))
        .catch(error => console.log(error));
      }
      render() {
        return (
            <div className="list-wrap">
            <div className="navigation-box">
                <nav className="nav">
                    <NavLink exact to="/" className="navigation-buttons">Home</NavLink>
                    <NavLink  to="/newNotes" className="navigation-buttons">New</NavLink>
                </nav>
                </div>
                <h1 className="home-title">NOTES</h1>
                <div className="page-box">
                    <div className="note-wrap">
                        {this.notes.map((note, index) => (
                            <div key={index} className="note-card">
                                <Link to={`/notes/${note.id}`}>
                                    <h3 className="note-title">{note.notes_title}</h3>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
export default NotesList;