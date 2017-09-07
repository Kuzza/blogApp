import { combineReducers } from 'redux'
import postsReducer from './posts'


import { reducer as formReducer } from 'redux-form'


const blogApp = combineReducers({
  posts: postsReducer,
  form: formReducer
})

export default blogApp;