import {addTodo} from '../actions'

export default function (state, dispatch) {
  const handleClick = (e) => {
    const input = document.getElementById('newTodoInput')
    if (input.value) {
      dispatch(addTodo(input.value.trim()))
      input.value = ''
    }
  }

  return <div> 
    <input id="newTodoInput" type='text' />
    <button onclick={handleClick}>
      Add
    </button>
  </div>
}
