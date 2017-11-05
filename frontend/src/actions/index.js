import axios from 'axios'
import {GET_QA_DATA, GET_PLACES_DATA} from './constants'


export function fetchData () {
  return function (dispatch) {
    axios.get('/posts')
    .then(function (response) {
      dispatch({ type: GET_QA_DATA, payload: response.data});
    })
    .catch(function (error) {
      console.log(error);
    })
  }
}

export function sendEmail (values) {
  axios.post('/send-email', values);
}


export function fetchPlaces () {
  return function (dispatch) {
    axios.get('/places')
    .then(function (response) {
      debugger;
      dispatch({ type: GET_PLACES_DATA, payload: response.data});
    })
    .catch(function (error) {
      console.log(error);
    })
  }
}