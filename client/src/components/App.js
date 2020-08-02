import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUser } from '../ducks/users'
import history from '../utils/history'

import Header from './Header/Header'
import Landing from './Landing/Landing'

class App extends Component {
  constructor(props) {
    super(props)

    const { fetchUser } = props

    fetchUser()
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <div className="container">
            <Header />
            <Route exact path="/" component={Landing} />
          </div>
        </Router>
      </div>
    )
  }
}

export default connect(
  null,
  {
    fetchUser
  }
)(App)
