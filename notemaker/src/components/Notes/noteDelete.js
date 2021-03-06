import React, { Component } from 'react';
import './noteDelete.css';

class NoteDeleteForm extends Component {
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        console.log('delete CDM');
    }
    deleteHandler = () => {
        this.props.deleteNote(this.props.match.params.id);
        this.props.history.push('/notes');
    }
    returnToNote = () => {
        this.props.history.push(`/notes/${this.props.match.params.id}`)
    }
    render() {
        return (
            <div className="notesBody">
                <h2 className="deleteTitle">Are you sure? It's such a lovely note...</h2>
                <div className="deleteButtons">
                    <div className="input-button" onClick={() => this.deleteHandler()}>Delete Note!</div>
                    <div className="input-button" onClick={() => this.returnToNote()}>Never Mind!</div>
                </div>
            </div>
        )
    }
}
export default NoteDeleteForm;