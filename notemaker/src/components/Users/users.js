import React, { Component } from 'react';
import axios from 'axios';
// import axios from 'axios';

class Users extends Component {
    componentDidMount() {
        const token = localStorage.getItem('jwt');
        const endpoint = "https://localhost:9000/api/users";
        const options = {
            //how do we pass the token to the client, to the server?...Headers!
            headers: {
                Authorization: token,
            },
        };
        axios
            .get(endpoint, options).then(res => {
                console("Got Users",res.data);
            })
            .catch(err => {
                console.error("Error getting users", err);
            });
        }
    render() { 
        return (
            <div>
                <h1>NoteMaker Users</h1>
            </div>
        );
    }
}
export default Users;