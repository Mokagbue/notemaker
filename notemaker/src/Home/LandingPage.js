import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import Daisy from '../PNG/daisy2.png';
import DaisySkull from '../PNG/daisyskull2.png';

import './home.css';

class LandingPage extends Component {
      
      render() {
        return (
          <div className="homeBody">
            <div className="navBox">
              <NavLink to="/login" className="navlinks">Login</NavLink>
              &nbsp;|&nbsp;
              <NavLink to="/register" className="navlinks">Register</NavLink>
              &nbsp;|&nbsp;
              <NavLink to="/" className="navlinks">Home</NavLink>
            </div>
            <div className="writingBox">
              <div className="daisyBox">
                <img src={Daisy} alt="daisy" className="daisy"  />
                <img src={DaisySkull} alt="daisyskull" className="daisyskull"  />
              </div>
              <h1 className="pageTitle">The Writing on the Wall</h1>
              {/* <img src={Title} alt="title" className="title" /> */}
            </div>
            <div>
              <h4 className="text">Leave a Note on the Wall</h4>
            </div>     
          </div>         
        )
      }
    }
export default LandingPage;


// import React, { Component } from 'react';
// // import auth from "../Auth/auth";

// class Home extends Component {
//     login() {
//       this.props.auth.login();
//     }
//     render() {
//       const { isAuthenticated } = this.props.auth;
//       return (
//         <div className="container">
//           {
//             isAuthenticated() && (
//                 <h4>
//                   You are logged in!
//                 </h4>
//               )
//           }
//           {
//             !isAuthenticated() && (
//                 <h4>
//                   You are not logged in! Please{' '}
//                   <a href="http:localhost:9000/api/notes" style={{ cursor: 'pointer' }}
//                     onClick={this.login.bind(this)}>
//                     Log In
//                   </a>
//                   {' '}to continue.
//                 </h4>
//               )
//           }
//         </div>
//       );
//     }
//   }
  
//   export default Home;