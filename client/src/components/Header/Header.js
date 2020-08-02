import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
  render() {
    const { user } = this.props

    return (
      <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="right"></ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ user }) => {
  return { user }
}

export default connect(mapStateToProps)(Header)
