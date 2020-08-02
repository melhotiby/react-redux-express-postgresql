import axios from 'axios'
import { USER_ENDPOINT } from './Constants'

export const fetchUser = () => {
  return axios.get(USER_ENDPOINT)
}
