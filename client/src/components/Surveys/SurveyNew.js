import React, { Component } from 'react'
import SurveyForm from './SurveyForm'
import { reduxForm } from 'redux-form'
import SurveyFormReview from './SurveyFormReview'

class SurveyNew extends Component {
  state = {
    showReview: false
  }

  renderContent() {
    const { showReview } = this.state

    if (showReview) {
      return (
        <SurveyFormReview onBack={() => this.setState({ showReview: false })} />
      )
    }

    return (
      <SurveyForm onSurveySubmit={() => this.setState({ showReview: true })} />
    )
  }

  render() {
    return <div>{this.renderContent()}</div>
  }
}

export default reduxForm({ form: 'surveyForm' })(SurveyNew)
