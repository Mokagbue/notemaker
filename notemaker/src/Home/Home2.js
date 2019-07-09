import React, { Component } from 'react';
import { NavLink, withRouter} from 'react-router-dom'; 
import Daisy from '../PNG/daisy2.png';
import DaisySkull from '../PNG/daisyskull2.png';
import './home.css';  

class Home extends Component {
    render() {
        return (
            <div className="homeBodyt">
              <div className="homenav">
                <NavLink to="/notes" className="navlinks">Notes</NavLink>
                <button onClick={this.logout} className="logout">Logout</button>
              </div>
              <div className="homeflexBox">
                <div className="daisyBox">
                  <img src={Daisy} alt="daisy" className="daisy"  />
                  <img src={DaisySkull} alt="daisyskull" className="daisyskull"  />
                </div>
                <h1 className="pageTitle">The Writing on the Wall</h1>
              </div>               
            </div>
    );
  }
  logout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  }
}

export default withRouter(Home);