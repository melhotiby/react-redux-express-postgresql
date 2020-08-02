import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleToken } from '../../actions/payments'

class Payments extends Component {
  render() {
    const { REACT_APP_STRIPE_KEY } = process.env
    const { email, handleToken } = this.props

    return null
  }
}

export default connect(
  null,
  {
    handleToken
  }
)(Payments)
