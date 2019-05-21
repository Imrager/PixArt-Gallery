import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

class PixArt extends Component {
    state = {
        image: {
            name: '',
            imageUrl: '',
            description: ''
        },
        redirectToGallery: false
    }
   
    getImage = () => {
        axios.get(`/api/${this.props.match.params.id}/gallery/${this.props.match.params.imageId}`).then(res => {console.log("rest",res)
            this.setState({ image: res.data })
        })

    }
    deleteImage = () => {
        axios.delete(`/api/${this.props.match.params.id}/gallery/${this.props.match.params.imageId}`).then(res => {
            this.setState({redirectToGallery: true})
        })
    }
    componentDidMount(){
        this.getImage()
    }
    render() {
        if(this.state.redirectToGallery) {
            return (< Redirect to={'/'+this.props.match.params.id} />)
        }
        return (
            <div>
                <img src={this.state.image.imageUrl}/><button onClick={this.deleteImage}>Delete</button>
                <br></br>
                <Link to='/'>Go to Home</Link>
            </div>
        );
    }
}

export default PixArt;