import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
        state = {
            username: '',
            password: ''
        };
    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = event => {
        event.preventDefault();
        const endpoint = "http://localhost:9000/api/login";
        axios
            .post(endpoint, this.state).then(res => {
                console.log("cdm login: ", res.data, );
                //saving the token to localstorage
                localStorage.setItem('jwt', res.data.token);
                this.props.history.push('/notes');
            })
            .catch(err => {
                console.error("failed login", err);
            });
    }

    render() {
        return (
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            name="username"
                            placeholder="username" 
                            value={this.state.username} 
                            onChange={this.handleInputChange} 
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password"
                            placeholder="password" 
                            value={this.state.password} 
                            onChange={this.handleInputChange} 
                        />
                    </div>
                    <div>
                        <button type="submit">SignIn</button>
                    </div>
                </form>
                <NavLink exact to="/register" className="navigation-buttons">Register</NavLink>
                &nbsp;|&nbsp;
                <NavLink exact to="/" className="navigation-buttons">Home</NavLink>
            </div>
        );
    }
}

export default Login;