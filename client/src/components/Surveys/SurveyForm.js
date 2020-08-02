import React, { Component, Fragment } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import SurveyField from './SurveyField'
import validateEmails from '../../utils/validateEmails'
import formFields from './formFields'

class SurveyForm extends Component {
  renderFields() {
    return (
      <Fragment>
        {formFields.map(({ name, label }, index) => {
          return (
            <Field
              key={index}
              name={name}
              label={label}
              component={SurveyField}
              type="text"
            />
          )
        })}
      </Fragment>
    )
  }
  render() {
    const { handleSubmit, onSurveySubmit } = this.props

    return (
      <form onSubmit={handleSubmit(onSurveySubmit)}>
        {this.renderFields()}
        <Link
          to="/surveys"
          className="btn waves-effect waves-light red lighten-2 left">
          Cancel
          <i className="material-icons right">close</i>
        </Link>

        <button className="teal btn-flat right white-text" type="submit">
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}

  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a value`
    }
  })

  errors.recipients = validateEmails(values.recipients || '')

  return errors
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm)
