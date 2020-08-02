export const CREATE_SURVEY = 'CREATE_SURVEY'
export const FETCH_SURVEYS = 'FETCH_SURVEYS'
export const FETCH_SURVEYS_SUCCESS = 'FETCH_SURVEYS_SUCCESS'

export const submitSurvey = (values, history) => {
  return {
    type: CREATE_SURVEY,
    payload: { values }
  }
}

export const fetchSurveysSuccess = surveys => {
  return {
    type: FETCH_SURVEYS_SUCCESS,
    payload: { surveys }
  }
}

export const fetchSurveys = () => {
  return {
    type: FETCH_SURVEYS
  }
}
