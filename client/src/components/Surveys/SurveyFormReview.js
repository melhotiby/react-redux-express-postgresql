import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import formFields from './formFields'
import { submitSurvey } from '../../actions/survey'

const SurveyFormReview = ({ onBack, formValues, submitSurvey, history }) => {
  const reviewFields = formFields.map(({ name, label }, index) => {
    return (
      <div key={index}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    )
  })

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button className="yellow darken-3 white-text btn-flat" onClick={onBack}>
        Back
      </button>
      <button
        className="green btn-flat right white-text"
        type="submit"
        onClick={() => submitSurvey(formValues, history)}>
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  )
}

const mapStateToProps = ({ form }) => {
  return { formValues: form.surveyForm.values }
}

export default connect(
  mapStateToProps,
  { submitSurvey }
)(withRouter(SurveyFormReview))
