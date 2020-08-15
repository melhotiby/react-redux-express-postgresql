import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import history from '../utils/history'
import { HOME_ROUTE } from '../routes'

import Header from './Header/Header'
import Landing from './Landing/Landing'

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div className="container">
            <Header />
            <Route exact path={HOME_ROUTE} component={Landing} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
