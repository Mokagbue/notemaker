import React, { Component } from 'react';
import { NavLink,  } from 'react-router-dom';
// import Auth from '../../Auth/auth.js';
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
            <div className="notesBody">
                <div className="navBox">
                    <NavLink exact to="/notes" className="navigation-buttons">Notes</NavLink> 
                </div>
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
                        placeholder="username" 
                        name="username"
                        onChange={this.handleChange}
                         />
                    <button className="input-button" type="submit">Submit</button>
                </form>
            </div>
        )

    }
}
export default NotesForm;
// export default Auth(NotesForm);

// componentDidMount() {
    //     this.grabbingNote(this.props.match.params.id);
    // }
    // grabbingNote = id => {
    //     axios.get(`http://localhost:9000/api/notes/${id}`)
    //     .then(response => {
    //         this.setState({
    //             id: response.data.id,
    //             notes_title: response.data.notes_title,
    //             notes_content: response.data.notes_content,
    //         })
    //     })
    // }
    // handleChange = event => {
    //     this.setState({ [event.target.name]: event.target.value })
    //     console.log('update handler?', event.target.value);
    // }
    // updatingNote = () => {
    //     const noteId = this.props.match.params.id;
    //     const updatedNote = {
    //         id: this.props.match.params.id,
    //         notes_title: this.state.notes_title,
    //         notes_content: this.state.notes_content,
    //     }
    //     this.props.updateNote(noteId, updatedNote)
    //     this.props.history.push('/notes');
    // }