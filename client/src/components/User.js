import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class User extends Component {
    state = {
        user: {
            name: ''
        },
        images: []
    }
    getUser = () => {
        axios.get(`/api/${this.props.match.params.id}`).then(res => {

            this.setState({ user: res.data.userId })
            this.setState({ images: res.data.images })
        })
    }
    componentDidMount() {
        this.getUser()
    }
    render() {
        // const images = ()=>{this.state.images.map(image =>{
        //   return  image.name
        // })}
        return (
            <div>
                <h1>{this.state.user.name}</h1>
                {this.state.images.map(image => {
                    return <img src={image.imageUrl}></img>
                })}
                {this.state.images.map(image => {
                    return image.name
                })}
                <br></br>
                <Link to='/'>Go to Home</Link>
            </div>
        );
    }
}

export default User;