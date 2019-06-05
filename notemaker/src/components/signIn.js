import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.username;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">Username</label>
                <input 
                    type="username" 
                    id="username" 
                    className="FormField__Input" 
                    placeholder="username" 
                    name="username" 
                    value={this.state.username} 
                    onChange={this.handleChange} 
                />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    className="FormField__Input" 
                    placeholder="Enter your password" 
                    name="password" 
                    value={this.state.password} 
                    onChange={this.handleChange} 
                />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button> <Link to="/signUp" className="FormField__Link">Create an account</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignIn;