import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
// import Callback from './Callback/Callback';
// import Auth from './Auth/Auth';
import history from './history';

import Note from './components/Notes/note.js';
import NotesList from './components/Notes/noteList.js';
import NoteDeleteForm from './components/Notes/noteDelete.js';
import NotesForm from './components/Notes/noteForm.js';
import NoteUpdateForm from './components/Notes/noteUpdate.js';
import Users from './components/Users/users.js';
import SignIn from './components/signIn.js';

// const auth = new Auth();

// const handleAuthentication = ({location}) => {
//   if (/access_token|id_token|error/.test(location.hash)) {
//     auth.handleAuthentication();
//   }
// }

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          {/* <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => { handleAuthentication(props);return <Callback {...props} /> }}/>
          <Route path="/" render={(props) => <App auth={auth}{...props} />} /> */}
            <Route path="/" render={(props) => <App {...props} />} />
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
            <Route exact path="/login" component={SignIn}></Route>
            <Route exact path="/users" component={Users}></Route>
        </div>
      </Router>
  );
}