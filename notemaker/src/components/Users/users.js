import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


class Users extends Component {
    state = {
            users: [],
        }
    };
    componentDidMount() {
        axios.get('http://localhost:9000/api/users').then(res => {
            this.setState({ users: res.data })
        })
      }
    
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
      render() {
        return (
            <div className="list-wrap">
            <div className="navigation-box">
                <nav className="nav">
                    <NavLink exact to="/" className="navigation-buttons">Home</NavLink>
                </nav>
                </div>
                <h1 className="home-title">Users</h1>
                <div className="page-box">
                    <div className="note-wrap">
                        {this.users.map((user, index) => (
                            <div key={index} className="note-card">
                                {/* <Link to={`/users/${user.id}`}> */}
                                    <h3 className="note-title">{user.username}</h3>
                                {/* </Link> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
export default Users;

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