import React, { Component } from 'react';
import axios from 'axios';
import Auth from '../../Auth/auth.js';


class Users extends Component {
    state = {
            users: [],
        }
    
    componentDidMount() {
        axios.get('http://localhost:9000/api/users').then(res => {
            this.setState({ users: res.data })
        })
      }
    
      render() {
        return (
            <div className="list-wrap">
                <h1 className="home-title">Users</h1>
                <div>
                    <p>
                        {this.state.users.map(user => (
                            <p key={user.id}>{user.username}</p>
                        ))}
                    </p>
                </div>
            </div>
        );
    }
}
export default Auth(Users);

//   grabAllUsers = () => {
    //     // console.log("getting users?", this.state);
    //     // axios.get('http://localhost:9000/api/users')
    //     // .then(response => this.setState({ ...this.state, users: response.data }))
    //     // .catch(error => console.log(error));
    //     const token = localStorage.getItem('jwt');
    //     const endpoint = "https://localhost:9000/api/users";
    //     const options = {
    //         //how do we pass the token to the client, to the server?...Headers!
    //         headers: {
    //             Authorization: token,
    //         },
    //     };
    //     axios
    //         .get(endpoint, options).then(res => {
    //             console("Got Users",res.data);
    //         })
    //         .catch(err => {
    //             console.error("Error getting users", err);
    //         });
    //     }

// class Users extends Component {
//     componentDidMount() {
//         const token = localStorage.getItem('jwt');
//         const endpoint = "https://localhost:9000/api/users";
//         const options = {
//             //how do we pass the token to the client, to the server?...Headers!
//             headers: {
//                 Authorization: token,
//             },
//         };
//         axios
//             .get(endpoint, options).then(res => {
//                 console("Got Users",res.data);
//             })
//             .catch(err => {
//                 console.error("Error getting users", err);
//             });
//         }
//     render() { 
//         return (
//             <div>
//                 <h1>NoteMaker Users</h1>
//             </div>
//         );
//     }
// }
// export default Users;