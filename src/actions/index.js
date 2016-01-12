import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY, SET_URL, Urls } from '../constants'

let nextTodoId = 0

export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    completed: false,
    text
  }
}

export function completeTodo(id) {
  return { type: COMPLETE_TODO, id }
}

export function setVisibility(filter) {
  return setUrl(Urls[filter])
}

export function setUrl(url) {
  return { type: SET_URL, url }
}