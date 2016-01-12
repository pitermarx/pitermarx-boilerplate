/* 
 * Using constants with action types here and on reducers
 * This folder can have multiple action creators
 * Be sure to export them all here in the index.js file
 */

import { ADD_TODO, COMPLETE_TODO, SET_URL } from '../constants'

export function addTodo(text) {
  return {
    type: ADD_TODO,
    completed: false,
    text
  }
}

export function completeTodo(id) {
  return { type: COMPLETE_TODO, id }
}

export function setUrl(url) {
  return { type: SET_URL, url }
}
