import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import Daisy from '../PNG/daisy.png';
import Title from '../PNG/nmker.png';

class LandingPage extends Component {
      
      render() {
        return (
          <div>
            <NavLink to="/login">Login</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/register">Register</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/">Home</NavLink>
            <img src={Daisy} alt="daisy" className="daisy" />
            <img src={Title} alt="title" className="title" />
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