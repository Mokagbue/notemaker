import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
// import axios from 'axios';

import Home from './Home/Home.js';
import Note from './components/Notes/note.js';
import NotesList from './components/Notes/noteList.js';
import NoteDeleteForm from './components/Notes/noteDelete.js';
import NotesForm from './components/Notes/noteForm.js';
import NoteUpdateForm from './components/Notes/noteUpdate.js';
// import SignUp from './components/signUp.js';
// import SignIn from './components/signIn.js';
import Users from './components/Users/users.js';

import Daisy from './PNG/daisy.png';
import Title from './PNG/nmker.png';


import './App.css';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     notes: [],
  //   }
  // };
  

  // componentDidMount() {
  //   this.grabAllNotes();
  // }

  // grabAllNotes = () => {
  //   console.log("getting notes?", this.state);
  //   axios.get('http://localhost:9000/api/notes')
  //   .then(response => this.setState({ ...this.state, notes: response.data }))
  //   .catch(error => console.log(error));
  // }

  // makeNewNote = (note) => {
  //   axios.post('http://localhost:9000/api/notes', note)
  //   .then(response => this.grabAllNotes())
  //   .catch(error => console.log({ message:"failed to make new note", error}));
  // }

  // deleteNote = (id) => {
  //   axios.delete(`http://localhost:9000/api/notes/${id}`)
  //   .then(response => this.grabAllNotes())
  //   .catch(error => console.log({ message:"failed to delete note", error}));
  // }

  // updateNote = (id, updatedNote) => {
  //   axios.put(`http://localhost:9000/api/notes/${id}`, updatedNote)
  //   .then(response => this.grabAllNotes())
  //   .catch(error => console.log({ message:"failed to update note", error}));
  // }


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
          
            <Route exact path="/users" component={Users}></Route>
          </main>
          <NavLink to="/login">Sign In</NavLink>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/users">Users</NavLink>
          <img src={Daisy} alt="daisy" className="daisy" />
          <img src={Title} alt="title" className="title" />
      </div>
    );
  }
}

export default App;
