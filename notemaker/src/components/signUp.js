import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            password: '',
            username: ''
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
                <label className="FormField__Label" htmlFor="name">Username</label>
                <input 
                    type="text" 
                    id="name" 
                    className="FormField__Input" 
                    placeholder="Enter your full name" 
                    name="name" value={this.state.name} 
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
                    name="password" value={this.state.password} 
                    onChange={this.handleChange} 
                />
              </div>
              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign Up</button> <Link to="/signIn" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
        );
    }
}
export default SignUp;