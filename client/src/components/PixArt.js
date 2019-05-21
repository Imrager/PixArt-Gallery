import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import '../components/PixArt.css'

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
        axios.get(`/api/${this.props.match.params.id}/gallery/${this.props.match.params.imageId}`).then(res => {
            console.log("rest", res)
            this.setState({ image: res.data })
        })

    }
    deleteImage = () => {
        axios.delete(`/api/${this.props.match.params.id}/gallery/${this.props.match.params.imageId}`).then(res => {
            this.setState({ redirectToGallery: true })
        })
    }
    componentDidMount() {
        this.getImage()
    }
    render() {
        if (this.state.redirectToGallery) {
            return (< Redirect to={'/' + this.props.match.params.id} />)
        }
        return (
            <div id="imageBackground">
                <div id='imageArticle'>
                    <div id='imageCenter'>
                        <h1 id='imageTitleFix'>{ this.state.image.name}</h1>
                        <img height='300px' src={this.state.image.imageUrl} />
                        <button onClick={this.deleteImage}>Delete</button>
                        <br></br>
                        <Link to={`/${this.props.match.params.id}`}>Go to Gallery</Link>
                    </div>
                    <div id='description'>
                    <h3>Description: </h3>
                    <p> { this.state.image.description } </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PixArt;