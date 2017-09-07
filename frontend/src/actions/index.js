import axios from 'axios'
import {GET_INITIAL_DATA} from './constants'


export function fetchData () {
  return function (dispatch) {
    axios.get('/posts')
    .then(function (response) {
      dispatch({ type: GET_INITIAL_DATA, payload: response.data});
    })
    .catch(function (error) {
      console.log(error);
    })
  }
}

export function sendEmail (values) {
  axios.post('/send-email', values);
}

