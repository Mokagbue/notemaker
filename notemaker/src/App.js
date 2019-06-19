import React, { Component } from 'react';
import { Route, NavLink, withRouter} from 'react-router-dom';
import axios from 'axios';

import Home from './Home/Home.js';
import Note from './components/Notes/note.js';
import NotesList from './components/Notes/noteList.js';
import NoteDeleteForm from './components/Notes/noteDelete.js';
import NotesForm from './components/Notes/noteForm.js';
import NoteUpdateForm from './components/Notes/noteUpdate.js';

import Register from './components/register.js';
import Login from './components/login.js';
import Users from './components/Users/users.js';

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
            <Route exact path="/notes" component={NotesList} />
            <Route path="/newNotes" render={(props) =>
              (<NotesForm {...props} makeNewNote={this.makeNewNote} />)} />  
            <Route path="/notes/:id" render={(props) =>
              (<Note {...props} />)} />
            <Route path="/deleteNote/:id" render={(props) =>
              (<NoteDeleteForm {...props} deleteNote={this.deleteNote} />)} />
            <Route path="/updateNote/:id" render={(props) =>
              (<NoteUpdateForm {...props} updateNote={this.updateNote} />)} />
          
            <Route exact path="/users" component={Users}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
          </main>
          <NavLink to="/login">Login</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/">Home</NavLink>
          &nbsp;|&nbsp;
          <button onClick={this.logout}>Logout</button>
          <img src={Daisy} alt="daisy" className="daisy" />
          <img src={Title} alt="title" className="title" />
      </div>
    );
  }
  logout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  }
}

export default withRouter(App);


