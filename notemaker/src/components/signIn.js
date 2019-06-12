import React, { Component } from 'react';
import axios from 'axios';

class SignIn extends Component {
        state = {
            username: 'Jazzy',
            password: 'cats'
        };

    handleSubmit = event => {
        event.preventDefault();
        const endpoint = "http://localhost:9000/api/login";
        axios
            .post(endpoint, this.state).then(res => {
                console.log("cdm login: ", res.data, );
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
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" />
                    </div>
                    <div>
                        <button type="submit">SignIn</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;