import { GET_PLACES_DATA } from '../actions/constants'


const placesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PLACES_DATA: {
      return action.payload;
    }
    default:
      return state;
  }
}

export default placesReducer;