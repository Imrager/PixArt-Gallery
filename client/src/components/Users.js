import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../components/Users.css'


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
    handleChange = (e) => {
        const cloneNewUser = { ...this.state.newUser }
        cloneNewUser[e.target.name] = e.target.value
        this.setState({ newUser: cloneNewUser })
    }
    createUser = () => {
        axios.post('/api/', {
            name: this.state.newUser.name
        })
            .then(res => {
                const userList = [...this.state.users]
                userList.unshift(res.data)
                this.setState({
                    newUser: {
                        name: ''
                    },
                    user: userList
                })
            })
    }
    render() {
        return (

            <div id="background">
                <section>
                    <article>
                        <form onSubmit={this.createUser}>
                            <div>
                                <label htmlFor="name">Create User</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <button>Create</button>
                        </form>
                        <ul>
                            {this.state.users.map((user, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={`/${user._id}`}>
                                            {user.name}
                                        </Link>
                                    </li>
                                )
                            })
                            }
                        </ul>
                    </article>
                </section>
            </div>
        );
    }
}

export default Users;