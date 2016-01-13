/*
 * redux has the concept of containers and components
 * app is the container. it binds the actions to the store and passes bound actions to the components
 * exports a function that is the current DOM given the store's state
 * the first node should be a div with the id "root" to match what is expected in ../main.js 
 */

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
