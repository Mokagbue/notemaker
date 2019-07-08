import React, { Component } from 'react';
import axios from 'axios';
import Auth from '../../Auth/auth.js';
import { NavLink } from 'react-router-dom';
import './about.css'; 

class About extends Component {
    
    render() {
        return (
            <div>
                <div className="navigation-box">
                    <nav className="nav">
                        <NavLink exact to="/home" className="navlinks">Home</NavLink>
                        <NavLink exact to="/notes" className="navlinks">Notes</NavLink>
                        <NavLink  to="/newNotes" className="navlinks">New Note</NavLink>
                    </nav>
                </div>
            </div>
        )
    }
}
export default Auth(Note);