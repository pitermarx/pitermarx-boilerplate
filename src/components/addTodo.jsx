export default function (model) {
  const handleClick = (e) => {
    const input = document.getElementById('newTodoInput')
    if (input.value) {
      model.addTodo(input.value.trim())
      input.value = ''
    }
  }

  return (
  <div> 
      <input id="newTodoInput" type='text' onsubmit={handleClick}/>
      <button onclick={handleClick}>
        Add
      </button>
    </div>
  )
}
