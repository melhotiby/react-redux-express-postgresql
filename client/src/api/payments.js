import axios from 'axios'
import { STIPE_PAYMENTS_ENDPOINT } from './Constants'

export const handleToken = ({ token }) => {
  return axios.post(STIPE_PAYMENTS_ENDPOINT, token)
}
