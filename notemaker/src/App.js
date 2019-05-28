import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Home from './Home/Home.js';
import Note from './components/note.js';
import NotesList from './components/noteList.js';
import NoteDeleteForm from './components/noteDelete.js';
import NotesForm from './components/noteForm.js';
import NoteUpdateForm from './components/noteUpdate.js';


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    }
  };
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
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
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="App">
        <div>
          <div>
            <div>
              <a href="#">Auth0 - React</a>
            </div>
            <h3
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </h3>
            {
              !isAuthenticated() && (
                  <h3
                    id="qsLoginBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </h3>
                )
            }
            {
              isAuthenticated() && (
                  <h3
                    id="qsLogoutBtn"
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </h3>
                )
            }
          </div>
        </div>
          <main>
            <Route exact path="/" component={Home}></Route>
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
          </main>
      </div>
    );
  }
}

export default App;
