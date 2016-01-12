import { VisibilityFilters } from '../constants'


export default function(model) {
  function isVisible(todo) {
    switch (model.filter) {
      case VisibilityFilters.SHOW_ALL:
        return true
      case VisibilityFilters.SHOW_COMPLETED:
        return todo.completed
      case VisibilityFilters.SHOW_ACTIVE:
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