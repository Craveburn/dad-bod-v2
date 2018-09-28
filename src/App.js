import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home.js'
import About from './pages/About.js'
import Music from './pages/Music.js'
import Shows from './pages/Shows.js'
import Merch from './pages/Merch.js'

export default class extends Component {

  render() {

    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/music" component={Music} />
            <Route path="/shows" component={Shows} />
            <Route path="/merch" component={Merch} />
          </Switch>
        </Router>
      </div>
    )
  }
}

