import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

class User extends Component {
    state = {
        user: {
            name: ''
        },
        images: [],
        redirectToHome: false
    }
    getUser = () => {
        axios.get(`/api/${this.props.match.params.id}`).then(res => {

            this.setState({ user: res.data.userId })
            this.setState({ images: res.data.images })
        })
    }
    deleteUser = () => {
        axios.delete(`/api/${this.props.match.params.id}`).then(res => {
            this.setState({redirectToHome: true})
        })
    }
    componentDidMount() {
        this.getUser()
    }
    render() {
        // const images = ()=>{this.state.images.map(image =>{
        //   return  image.name
        // })}
        if(this.state.redirectToHome) {
            return (< Redirect to="/" />)
        }
        return (
            
            <div>

                <h1>{this.state.user.name}</h1><button onClick={this.deleteUser}>Delete</button>
                {this.state.images.map(image => {
                    let imgUrl = <img src={image.imageUrl}></img>
                    let imgName = <h2>{image.name}</h2>
                    return imgUrl
                })}
                {/* {this.state.images.map(image => {
                    return image.name
                })} */}
                <br></br>
                <Link to='/'>Go to Home</Link>
            </div>
        );
    }
}

export default User;