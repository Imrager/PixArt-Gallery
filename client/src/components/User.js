import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import '../components/User.css'

class User extends Component {
    state = {
        user: {
            name: '',
            _id: ''
        },
        formUser: {
            name: ''
        }, 
        newImage: {
            name: '',
            imageUrl: '',
            description: '',
            userId: this.props.match.params.id
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
            this.setState({ redirectToHome: true })
        })
    }
    updateUser = () => {
        axios.put(`/api/${this.props.match.params.id}`, {
            name: this.state.formUser.name
        })
            .then(res => {
                this.setState({ user: res.data })
            })
    }
    createImage = () => {
        
        console.log(this.state.newImage)
        axios.post(`/api/${this.props.match.params.id}/gallery`, this.state.newImage)
        this.getUser()
    }
    handleChange = (e) => {
        const cloneNewUser = { ...this.state.formUser }
        cloneNewUser[e.target.name] = e.target.value
        this.setState({ formUser: cloneNewUser })
    }
    handleChangeImage = (e) => {
        const cloneNewImage = { ...this.state.newImage }
        cloneNewImage[e.target.name] = e.target.value
        this.setState({ newImage: cloneNewImage })
    }
    componentDidMount() {
        this.getUser()
    }
    render() {

        if (this.state.redirectToHome) {
            return (< Redirect to="/" />)
        }
        return (

            <div class='background2'>
                <article id='userArt'>
                    <div id='topArticle'>
                    <div id='userSetting'>
                    <h1>{this.state.user.name}</h1>
                    <button onClick={this.deleteUser}>Delete</button>
                    
                    <br></br>
                    <form onSubmit={this.updateUser} id="updateForm">
                        <div>
                            <label htmlFor="name">Update Name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                                value={this.state.formUser.name}
                            />
                        </div>
                        <button>Update</button>
                    </form>
                    </div>









                    <form onSubmit={this.createImage} id='createForm'>
                        <div>
                            <label htmlFor="imageName">Name</label>
                            <input id="imageName" type="text" name='name' onChange={this.handleChangeImage} />
                            <label htmlFor="imageUrl">Link</label>
                            <input id="imageUrl" type="text" name="imageUrl" onChange={this.handleChangeImage} />
                            <label htmlFor="description">Description</label>
                            <input id="description" type="text" name="description" onChange={this.handleChangeImage} />
                            <input id="description" type="text" value={this.state.user._id} name="userId" hidden="hidden" onChange={this.handleChangeImage} />
                        </div>
                        <button>Add Pic to Gallery</button>
                    </form>
            </div>

                    <div id='gallery'>
                    {this.state.images.map(image => {
                        let imgUrl = <img height='300px' src={image.imageUrl}></img>
                        let imgName = <h2>{image.name}</h2>
                        return <div>{imgName}<Link to={`/${image.userId}/gallery/${image._id}`}>{imgUrl}</Link></div>
                    })}
                    </div>
                    <br></br>
                    <Link to='/'>Go to Home</Link>
                </article>
            </div>
        );
    }
}

export default User;