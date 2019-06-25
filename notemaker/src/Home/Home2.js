import React, { Component } from 'react';
import { NavLink, withRouter} from 'react-router-dom'; 
import Daisy from '../PNG/daisy.png';
import Title from '../PNG/nmker.png';
import './home.css';  

class Home extends Component {
    render() {
        return (
            <div className="homeBody">
              <NavLink to="/notes" className="navlinks">Notes</NavLink>
              &nbsp;|&nbsp;
              <button onClick={this.logout} className="navlinks">Logout</button>
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

export default withRouter(Home);