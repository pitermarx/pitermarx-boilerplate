/*
 * Reducers are combined and exported here with the help of redux
 * Be sure to not mutate the state and return always a new object instance on the reducers
 */

import { ADD_TODO, COMPLETE_TODO, SET_URL } from '../constants'
import persist from '../helpers/saveLocalStorage'
import { combineReducers } from 'redux'

// todos reducer
const todos = persist((state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      // get an unique id
      const id = state.length ? Math.max.apply(Math, state.map(t => t.id)) : 0
      return state.concat([{
        id: id + 1,
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
})

// url reducer
const url = (state = '/', action) =>
  action.type === SET_URL ? action.url : state
  
export default combineReducers({ todos, url })