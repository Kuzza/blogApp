import { combineReducers } from 'redux'
import postsReducer from './posts'
import placesReducer from './places'


import { reducer as formReducer } from 'redux-form'


const blogApp = combineReducers({
  posts: postsReducer,
  places: placesReducer,
  form: formReducer
})

export default blogApp;