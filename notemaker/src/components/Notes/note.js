import React, { Component } from 'react';
import axios from 'axios';
import Auth from '../../Auth/auth.js';
import { NavLink } from 'react-router-dom';

class Note extends Component {
    constructor() {
        super();
        this.state = {
            note: {
                id: "",
                notes_title: "",
                notes_content: "",
                username: ""
            }
        }
    }
    componentDidMount() {
        const noteId = this.props.match.params.id;
        this.grabById(noteId)
    }
    grabById = (id) => {
        axios.get(`http://localhost:9000/api/notes/${id}`)
        .then(response => {
            const note = {
                id: response.data.id,
                notes_title: response.data.notes_title,
                notes_content: response.data.notes_content,
                username: response.data.username
            }
            this.setState({
                ...this.state.note,
                note: note
            })
        })
        .catch(error => console.log(error));
    }
    deleteButton = () => {
        const id = this.props.match.params.id;
        this.props.history.push(`/deleteNote/${id}`)
    }
    updateButton = () => {
        const id = this.props.match.params.id;
        this.props.history.push(`/updateNote/${id}`)
    }
    
    render() {
        return (
            <div className="note-box">
            <div className="navigation-box">
            <nav className="nav">
                <NavLink exact to="/home" className="navigation-buttons">Home</NavLink>
                &nbsp;|&nbsp;
                <NavLink exact to="/notes" className="navigation-buttons">Notes</NavLink>
                &nbsp;|&nbsp;
                <NavLink  to="/newNotes" className="navigation-buttons">New</NavLink>
            </nav>
            </div>
                <div className="a-note">
                    <h1 className="note-title">{this.state.note.notes_title}</h1>
                    <h3 className="note-title">Created By: {this.state.note.username}</h3>
                    <p className="note-content">{this.state.note.notes_content}</p>
                    <div className="note-buttonwrap">
                        <div className="note-buttons" onClick={() => this.deleteButton()}>Delete Note?</div>
                        <div className="note-buttons" onClick={() => this.updateButton()}>Update Note?</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Auth(Note);