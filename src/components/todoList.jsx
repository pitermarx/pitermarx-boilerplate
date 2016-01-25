import { Urls } from '../constants'
import { toggleTodo, removeTodo } from '../actions'
import { listComponent as strings } from '../data/strings.json'

export default function({url, todos}, dispatch) {
  const isVisible = 
    url === Urls.HOME ? () => true : 
    url === Urls.COMPLETED ? t => t.completed :
    url === Urls.ACTIVE ? t => !t.completed :
    () => false 
    
  var lis = todos.filter(isVisible)
    .map(todo => <li>
      <span
        title={todo.completed ? strings.setActive : strings.complete }
        onclick={e => dispatch(toggleTodo(todo.id))}
        style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
        {todo.text}
      </span>
      <span 
        title={strings.delete}
        onclick={() => dispatch(removeTodo(todo.id))}
        style={{margin: '5px'}}>
        &times;
      </span>
    </li>)
    
  return <ul>{lis}</ul>
}
