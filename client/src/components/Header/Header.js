import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Payments from '../Payments/Payments'

class Header extends Component {
  renderContent() {
    const { auth } = this.props
    switch (auth) {
      case null:
        return
      case false:
        return (
          <li>
            <a href="/api/v1/auth/register">TEST Backend</a>
          </li>
        )
      default:
        return [
          <li key="1" style={{ margin: '0 10px' }}>
            Credits: {auth.credits}
          </li>,
          <li key="2">
            <Payments email={auth.email} />
          </li>,
          <li key="3">
            <a href="/api/logout">Logout</a>
          </li>
        ]
    }
  }

  render() {
    const { auth } = this.props

    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={auth ? '/surveys' : '/'} className="brand-logo left">
            Emaily
          </Link>
          <ul id="nav-mobile" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(Header)
