import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import Home from './Home/Home.js';
import Note from './components/note.js';
import NotesList from './components/noteList.js';
import NoteDeleteForm from './components/noteDelete.js';
import NotesForm from './components/noteForm.js';
import NoteUpdateForm from './components/noteUpdate.js';
import Daisy from './PNG/daisy.png';
import Title from './PNG/nmker.png';


import './App.css';

class App extends Component {
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
    axios.get('http://localhost:9000/api/notes')
    .then(response => this.setState({ ...this.state, notes: response.data }))
    .catch(error => console.log(error));
  }

  makeNewNote = (note) => {
    axios.post('http://localhost:9000/api/notes', note)
    .then(response => this.grabAllNotes())
    .catch(error => console.log({ message:"failed to make new note", error}));
  }

  deleteNote = (id) => {
    axios.delete(`http://localhost:9000/api/notes/${id}`)
    .then(response => this.grabAllNotes())
    .catch(error => console.log({ message:"failed to delete note", error}));
  }

  updateNote = (id, updatedNote) => {
    axios.put(`http://localhost:9000/api/notes/${id}`, updatedNote)
    .then(response => this.grabAllNotes())
    .catch(error => console.log({ message:"failed to update note", error}));
  }


  render() {
  
    return (
      <div className="App">
          <main>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/notes" render={(props) =>
              (<NotesList {...props} notes={this.state.notes} />)} />
            <Route path="/newNotes" render={(props) =>
              (<NotesForm {...props} makeNewNote={this.makeNewNote} />)} />  
            <Route path="/notes/:id" render={(props) =>
              (<Note {...props} />)} />
            <Route path="/deleteNote/:id" render={(props) =>
              (<NoteDeleteForm {...props} deleteNote={this.deleteNote} />)} />
            <Route path="/updateNote/:id" render={(props) =>
              (<NoteUpdateForm {...props} updateNote={this.updateNote} />)} />
            <Route path="/signIn" render={(props) =>
              (<SignIn {...props} updateNote={this.updateNote} />)} />
            <Route path="/signUp" render={(props) =>
              (<SignUp {...props} updateNote={this.updateNote} />)} />
          </main>
          <NavLink to="/signIn">Sign In</NavLink>
          <NavLink to="/signUp">Sign Up</NavLink>
          <img src={Daisy} alt="daisy" className="daisy" />
          <img src={Title} alt="title" className="title" />
      </div>
    );
  }
}

export default App;
