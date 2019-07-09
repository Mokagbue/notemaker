import React, { Component } from 'react';
import axios from 'axios';
import { NavLink,  } from 'react-router-dom';
import './noteUpdate.css'; 

class NoteUpdateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            notes_title: "",
            notes_content: "",
        }
    }
    componentDidMount() {
        this.grabbingNote(this.props.match.params.id);
    }
    grabbingNote = id => {
        axios.get(`http://localhost:8000/api/notes/${id}`)
        .then(response => {
            this.setState({
                id: response.data.id,
                notes_title: response.data.notes_title,
                notes_content: response.data.notes_content,
            })
        })
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
        console.log('update handler?', event.target.value);
    }
    updatingNote = () => {
        const noteId = this.props.match.params.id;
        const updatedNote = {
            id: this.props.match.params.id,
            notes_title: this.state.notes_title,
            notes_content: this.state.notes_content,
        }
        this.props.updateNote(noteId, updatedNote)
        this.props.history.push('/notes');
    }
    render() {
        return (
            <div>
                <div className="navigation-box">
                    <NavLink exact to="/notes" className="navlinks">Notes</NavLink>
                    <NavLink exact to="/home" className="navlinks">Home</NavLink> 
                </div>
                <div className="notesUpdateBody">
                    <h1 className="updateTitle">Update Note?</h1>
                    <div className="updateFormBox">
                        <form className="note-form" onSubmit={this.updatingNote}>
                            <input className="input-title" type="text" placeholder="title" name="notes_title"
                                onChange={this.handleChange}
                                value={this.state.notes_title} />
                            <textarea className="input-content" type="text" placeholder="your note here..." name="notes_content"
                                onChange={this.handleChange}
                                value={this.state.notes_content} />
                            <button className="input-button" type="submit">Update Note!</button>
                        </form>
                    </div>             
                </div> 
            </div>   
        )
    }
}
export default NoteUpdateForm;