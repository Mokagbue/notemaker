import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import '../App.css';


class Register extends Component {
        state = {
          username: '',
          password: '',   
        };
    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:9000/api/register', this.state)
          .then(res => {
            this.props.history.push('/login');
          })
          .catch(err => console.log('failed to login in', err));
    };

    render() {
        return (
          <div className="registerBody">
            <div className="navBox">
              <NavLink exact to="/login" className="navlinks">Login</NavLink>
              &nbsp;|&nbsp;
              <NavLink exact to="/" className="navlinks">Home</NavLink>
            </div>
            <h1 className="userTitles">Register</h1>
            <div className="registerFormBox">
              <form onSubmit={this.handleSubmit}>
                <div className="FormField">
                  <input 
                      type="text" 
                      id="name" 
                      placeholder="Enter your username" 
                      name="username" 
                      value={this.state.username} 
                      onChange={this.handleChange} 
                  />
                  <label className="formInputs"> :Username</label>
                </div>
                <div>
                  <input 
                      type="password" 
                      id="password"
                      placeholder="Enter your password" 
                      name="password" 
                      value={this.state.password} 
                      onChange={this.handleChange} 
                  />
                  <label className="formInputs"> :password</label>
                </div>
                <div className="formButtons">
                    <button type='submit'>Register</button>
                </div>
              </form>
            </div>
          </div>
        );
    }
}
export default Register;