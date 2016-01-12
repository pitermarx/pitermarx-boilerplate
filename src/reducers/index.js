import { ADD_TODO, COMPLETE_TODO, SET_URL } from '../constants'
import { combineReducers } from 'redux'

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([{
        id: action.id,
        completed: false,
        text: action.text
      }])
    case COMPLETE_TODO:
      return state.map(t => ({
        completed: t.id === action.id,
        id: t.id,
        text: t.text
      }))
    default:
      return state
  }
}

const url = (state = '/', action) =>
  action.type === SET_URL ? action.url : state
  
export default combineReducers({
  todos,
  url
})