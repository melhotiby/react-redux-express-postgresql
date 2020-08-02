import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSurveys } from '../../actions/survey'

class SurveyList extends Component {
  componentDidMount() {
    const { fetchSurveys } = this.props

    fetchSurveys()
  }

  render() {
    const { surveys } = this.props

    return (
      <div>
        {surveys.reverse().map(survey => {
          return (
            <div key={survey._id} className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{survey.title}</span>
                <p>{survey.body}</p>
                <div className="right">
                  Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                </div>
              </div>
              <div class="card-action">
                <a>Yes: {survey.yes}</a>
                <a>No: {survey.no}</a>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    surveys: state.surveys
  }
}

export default connect(
  mapStateToProps,
  {
    fetchSurveys
  }
)(SurveyList)
