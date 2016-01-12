import { Urls } from '../constants'


export default function(model) {
  function isVisible(todo) {
    switch (model.url) {
      case Urls.HOME:
        return true
      case Urls.COMPLETED:
        return todo.completed
      case Urls.ACTIVE:
        return !todo.completed
    }
  }
  
  return (
    <ul>
      {model.todos.map((todo) => {
        if(!isVisible(todo)) {
          return null
        }
        return (
          <li
            onclick={e => model.complete(todo.id)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: todo.completed ? 'default' : 'pointer'
            }}>
            {todo.text}
          </li>
        )
      })}
    </ul>
  )
}