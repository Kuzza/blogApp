import { GET_QA_DATA } from '../actions/constants'


const postsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_QA_DATA: {
      return action.payload;
    }
    default:
      return state;
  }
}

export default postsReducer;