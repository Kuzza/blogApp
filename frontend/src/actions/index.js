import axios from 'axios'

export const GET_INITIAL_DATA = 'GET_INITIAL_DATA';


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

export function sendQuestion (e, data) {
  debugger;
  e.preventDefault();
  console.log(data);
}