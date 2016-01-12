import diff from 'virtual-dom/diff'
import patch from 'virtual-dom/patch'
import h from 'virtual-dom/h'
import { createStore } from 'redux'

export default function(app, reducer) {
  const store = createStore(reducer)
  let currentVDom = h('div#root')
  const render = () => {
    requestAnimationFrame(() => {
      const newVDom = app(store)
      const patches = diff(currentVDom, newVDom)
      patch(document.getElementById('root'), patches);
      currentVDom = newVDom
      
      const url = store.getState().url
      if (location.pathname !== url) {
        history.pushState(null, null, url)
      }
    })
  }
      
  store.subscribe(render)
  render()
  
  // if the user hits the back/forward buttons
  window.addEventListener('popstate', () => {
    store.dispatch({type: 'SET_URL', url: location.pathname})
  })
}
