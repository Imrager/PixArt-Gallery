
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Users from './components/Users'
import User from './components/User'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <h1>Pixart</h1>
          <Switch>
            <Route exact path="/" component={Users}/>
            <Route path="/:id" component={User}/> 
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App