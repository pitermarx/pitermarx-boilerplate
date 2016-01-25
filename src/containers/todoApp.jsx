
import addTodo from '../components/addTodo'
import todoList from '../components/todoList'
import footer from '../components/footer'
import progress from '../components/shared/progress'
import strings from '../data/strings.json'

export default function (store) {
  const state = store.getState()
  const progressValue =
    state.todos.filter(t => t.completed).length / (state.todos.length || 1)
  
  return <section>
    <h2>{strings.TodoList}</h2>
    <p> Simple todo app to show off redux store. Syncs to localstorage</p>
    {addTodo(state, store.dispatch)}
    {progress(progressValue)}
    {todoList(state, store.dispatch)}
    {footer(state, store.dispatch)}
  </section>
}
