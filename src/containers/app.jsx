import addTodo from '../components/addTodo'
import todoList from '../components/todoList'
import footer from '../components/footer'
import { bindActionCreators } from 'redux'
import * as unboundActions from '../actions'

export default function (store) {
  const actions = bindActionCreators(unboundActions, store.dispatch)
  const state = store.getState()
  
  return <div id='root'>
    {addTodo({addTodo: actions.addTodo})}
    {todoList({url: state.url, todos: state.todos, complete: actions.completeTodo})}
    {footer({url: state.url, setUrl: actions.setUrl})}
  </div>
}