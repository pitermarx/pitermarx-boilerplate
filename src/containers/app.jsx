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
    {todoList({filter: state.filter, todos: state.todos, complete: actions.completeTodo})}
    {footer({filter: state.filter, setVisibility: actions.setVisibility})}
  </div>
}