import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/auth'
import history from '../utils/history'

import Header from './Header/Header'
import Landing from './Landing/Landing'
import Dashboard from './Dashboard/Dashboard'
import SurveyNew from './Surveys/SurveyNew'

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
            <Route exact path="/surveys" component={Dashboard} />
            <Route exact path="/surveys/new" component={SurveyNew} />
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
