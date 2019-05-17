import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class Users extends Component {
    state = {
        users: []
    }
    getAllUsers = () => {
        axios.get('/api/').then(res => {
            this.setState({ users: res.data })
        })
    }

    componentDidMount = () => {
        this.getAllUsers()
    }
    render() {
        return (
            <div>
                {this.state.users.map((user, index) => {
                    return (
                        <div key={index}>

                        <Link to={`/${user._id}`}>
                            {user.name}
                        </Link>
                        </div>
                    )
                })
                }
            </div>
        );
    }
}

export default Users;