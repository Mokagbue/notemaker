import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import '../App.css'; 

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
            <div>
                <div className="navBox">
                    <NavLink exact to="/register" className="navlinks">Register</NavLink>
                    &nbsp;|&nbsp;
                    <NavLink exact to="/" className="navlinks">Home</NavLink>
                </div>
                <div className="loginBody">
                    <h1 className="userTitles">Login</h1>
                    <div className="loginFormBox">
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label className="formInputs">Username : </label>
                                <input 
                                    type="text" 
                                    name="username"
                                    placeholder="username" 
                                    value={this.state.username} 
                                    onChange={this.handleInputChange} 
                                />
                            </div>
                            <div>
                                <label className="formInputs">password : </label>
                                <input 
                                    type="password" 
                                    name="password"
                                    placeholder="password" 
                                    value={this.state.password} 
                                    onChange={this.handleInputChange} 
                                />
                            </div>
                            <div className="formButtons">
                                <button type="submit">SignIn</button>
                            </div>
                        </form>
                    </div> 
                </div>  
            </div>
        );
    }
}

export default Login;