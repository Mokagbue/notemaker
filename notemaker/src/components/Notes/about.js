import React, { Component } from 'react';
// import Auth from '../../Auth/auth.js';
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
                <div className="aboutBody">
                    <h1 className="aboutTitle">About The Wall</h1>
                    <div className="aboutContent">
                        <p>A blank canvas</p>
                        <p>where anyone can leave a message.</p>
                         <p>Scrub the wall clean,</p>
                         <p>or add to the layers</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default About;
// export default Auth(About);