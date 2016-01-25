import {addTodo} from '../actions'
import {addComponent as strings} from '../data/strings.json'

export default function (state, dispatch) {
  const handleEnter = e => {
    if (e.keyCode === 13) {
       const input = document.getElementById('newTodoInput')
      if (input.value) {
        dispatch(addTodo(input.value.trim()))
        input.value = ''
      }
    }
  }
  return <input 
    id="newTodoInput" 
    type='text'
    placeholder={strings.WhatToDo}
    className='form-input'
    onkeydown={handleEnter} />
}
