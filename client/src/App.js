
// import './App.css';
import React, { Component } from 'react'
import axios from 'axios'


class App extends Component {
  

  render () {
    return (
      <div >
     <h1>PixArt</h1>
     {
            this.state.users.map((user, index)=> {
                return (
                    <div key={index}>
            {user.name}
                        {/* <Link
                            to={`/${creature._id}`}
                        >
                            {creature.name}
                        </Link> */}
                    </div>
                )
            })
        }
    </div>
    )
  }
}

export default App