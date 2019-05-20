import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

class User extends Component {
    state = {
        user: {
            name: ''
        },
        formUser: {
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
    updateUser = () => {
        axios.put(`/api/${this.props.match.params.id}`, {
              name: this.state.formUser.name
          })
          .then(res => {
              this.setState({user: res.data})
          })
    }
    handleChange = (e) => {
        const cloneNewUser = {...this.state.formUser}
        cloneNewUser[e.target.name] = e.target.value
        this.setState({formUser: cloneNewUser})
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
                <br></br>
                <form onSubmit={this.updateUser}>
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
                {this.state.images.map(image => {
                    let imgUrl = <img height='300px' src={image.imageUrl}></img>
                    let imgName = <h2>{image.name}</h2>
                    return <div>{imgName}<Link to={`/${image.userId}/gallery/${image._id}`}>{imgUrl}</Link></div>
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