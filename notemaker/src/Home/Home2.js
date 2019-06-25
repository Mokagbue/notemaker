import React, { Component } from 'react';
import { NavLink, withRouter} from 'react-router-dom'; 
import Daisy from '../PNG/daisy.png';
import Title from '../PNG/nmker.png';  

class Home extends Component {
    render() {
        return (
            <div className="App">
            <NavLink to="/notes">Notes</NavLink>
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

export default withRouter(Home);