import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Users from './components/Users'
import User from './components/User'
import PixArt from './components/PixArt'
import './App.css'
import nyanCatGif from '../src/images/nyanCatGif.gif'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='background'>
          <header>
            <img src={nyanCatGif} id='nyanCat'></img>
          <h1 id='title'>Pixart</h1>
          </header>
          <Switch>
            <Route exact path="/" component={Users}/>
             <Route exact path="/:id" component={User}/>
             <Route exact path="/:id/gallery/:imageId" component={PixArt}/>    
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App