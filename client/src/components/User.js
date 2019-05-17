import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class User extends Component {
    state = {
        user: {
            name: '',
            images:[]
        }
    }
    getUser = () => {
        axios.get('/api/:userId').then(res => {
            this.setState({ user: res.data })
        })
    }
    componentDidMount = () => {
        this.getUser()
    }
    render() {
        return (
            <div>
                
                <h1></h1>
                
                <Link to='/'>Go to Home</Link>
            </div>
        );
    }
}

export default User;