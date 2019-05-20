import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

class PixArt extends Component {
    state = {
        image: {
            name: '',
            imageUrl: '',
            description: ''
        }
    }
    getImage = () => {
        axios.get(`/${this.props.match.params.id}/gallery/${this.props.match.params.imageId}`).then(res => {
            this.setState({ image: res.data.images })
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.image.imageUrl} hi</h1>
            </div>
        );
    }
}

export default PixArt;