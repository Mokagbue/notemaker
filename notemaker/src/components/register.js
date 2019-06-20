import React, { Component } from 'react';
import axios from 'axios';


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
        <div>
            <form onSubmit={this.handleSubmit}>
              <div className="FormField">
                <label>Username</label>
                <input 
                    type="text" 
                    id="name" 
                    placeholder="Enter your username" 
                    name="username" 
                    value={this.state.username} 
                    onChange={this.handleChange} 
                />
              </div>
              <div>
                <label>Password</label>
                <input 
                    type="password" 
                    id="password"
                    placeholder="Enter your password" 
                    name="password" 
                    value={this.state.password} 
                    onChange={this.handleChange} 
                />
              </div>
              <div>
                  <button type='submit'>Register</button>
              </div>
            </form>
          </div>
        );
    }
}
export default Register;