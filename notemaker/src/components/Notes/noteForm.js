import React, { Component } from 'react';
import { NavLink,  } from 'react-router-dom';
import './notes.css'; 


class NotesForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes_title: '',
            notes_content: '',
            username: ''
        }
    }
     
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }
    makingNewNote = event => {
        const newNote = {
            notes_title: this.state.notes_title,
            notes_content: this.state.notes_content,
            username: this.state.username,
        }
        this.props.makeNewNote(newNote);
        this.props.history.push('/notes');
    }
    render() {
        return (
            <div>
                <div className="navBox">
                    <NavLink exact to="/notes" className="navlinks">Notes</NavLink> 
                </div>
                <div className="notesBody">
                    <h2 className="note-title">Making A New Note?</h2>
                    <form onSubmit={this.makingNewNote} className="noteFormBox">
                        <input 
                            className="input-title" 
                            type="text"
                            value={this.state.notes_title} 
                            placeholder="add a title!" 
                            name="notes_title"
                            onChange={this.handleChange}
                            />
                        <textarea 
                            className="input-content" 
                            type="text"
                            value={this.state.notes_content} 
                            placeholder="what's on your mind?" 
                            name="notes_content"
                            onChange={this.handleChange}
                            />
                        <input 
                            className="input-title" 
                            type="text"
                            value={this.state.username} 
                            placeholder="author" 
                            name="username"
                            onChange={this.handleChange}
                            />
                        <button className="input-button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
            
        )

    }
}
export default NotesForm;