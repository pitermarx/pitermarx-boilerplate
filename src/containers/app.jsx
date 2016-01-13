/*
 * exports a function that is the current DOM given the store's state
 * the first node should be a div with the id "root" to match what is expected in ../main.js 
 */

import addTodo from '../components/addTodo'
import todoList from '../components/todoList'
import footer from '../components/footer'

export default function (store) {
  const state = store.getState()

  return <div id='root'>
    {addTodo(state, store.dispatch)}
    {todoList(state, store.dispatch)}
    {footer(state, store.dispatch)}
  </div>
}
