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
        axios.get(`/api/${this.props.match.params.id}/gallery/${this.props.match.params.imageId}`).then(res => {console.log("rest",res)
            this.setState({ image: res.data })
        })

    }
    componentDidMount(){
        this.getImage()
    }
    render() {
        return (
            <div>
                <img src={this.state.image.imageUrl}/>
                <br></br>
                <Link to='/'>Go to Home</Link>
            </div>
        );
    }
}

export default PixArt;