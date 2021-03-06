/*
 * Reducers are combined and exported here with the help of redux
 * Be sure to not mutate the state and return always a new object instance on the reducers
 */

import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, SET_URL } from '../constants'
import persist from '../helpers/saveLocalStorage'
import { combineReducers } from 'redux'

// todos reducer
export const todos = persist((state = [] , action) => {
  switch (action.type) {
    case ADD_TODO:
      // get an unique id
      const id = state.length ? Math.max.apply(Math, state.map(t => t.id)) : 0
      return state.concat([{
        id: id + 1,
        completed: false,
        text: action.text
      }])
    case TOGGLE_TODO:
      return state.map(t => 
        t.id !== action.id ? t : {
          completed: !t.completed,
          id: t.id,
          text: t.text
      })
    case REMOVE_TODO:
      return state.filter(t => t.id !== action.id)
    default:
      return state
  }
})

// url reducer
export const url = (state = '/' , action) => action.type === SET_URL ? action.url : state

export default combineReducers({ todos, url})
