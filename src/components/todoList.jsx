import { Urls } from '../constants'
import {completeTodo} from '../actions'

export default function(state, dispatch) {
  const {url, todos} = state
  const isVisible = 
    url === Urls.HOME ? () => true : 
    url === Urls.COMPLETED ? t => t.completed :
    url === Urls.ACTIVE ? t => !t.completed :
    () => false 
    
  var lis = todos
    .filter(isVisible)
    .map(todo => <li
        onclick={e => dispatch(completeTodo(todo.id))}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: todo.completed ? 'default' : 'pointer'
        }}>
          {todo.text}
      </li>)
    
  return <ul>{lis}</ul>
}
