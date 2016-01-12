import { ADD_TODO, COMPLETE_TODO, SET_URL } from '../constants'
import saveInLocalStorage from '../helpers/saveLocalStorage'
import { combineReducers } from 'redux'

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const id = state.length ? Math.max.apply(Math, state.map(t => t.id)) : 0
      return state.concat([{
        id: id,
        completed: false,
        text: action.text
      }])
    case COMPLETE_TODO:
      return state.map(t => ({
        completed: t.id === action.id ? true : t.completed,
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
  todos: saveInLocalStorage(todos, 'todos'),
  url
})