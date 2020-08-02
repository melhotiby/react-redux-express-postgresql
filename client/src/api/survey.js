import axios from 'axios'
import { CREATE_SURVEY, FETCH_SURVEYS } from './Constants'

export const createSurvey = ({ values }) => {
  return axios.post(CREATE_SURVEY, values)
}

export const fetchSurveys = () => {
  return axios.get(FETCH_SURVEYS)
}
