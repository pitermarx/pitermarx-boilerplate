import diff from 'virtual-dom/diff'
import patch from 'virtual-dom/patch'
import virtualize from 'vdom-virtualize'
import { createStore } from 'redux'

export default function(rootNode, app, reducer) {
  const store = createStore(reducer, JSON.parse(window.__INITIAL_STATE__))
  let currentVDom = virtualize(rootNode)
  const render = () => {
    requestAnimationFrame(() => {
      const newVDom = app(store)
      const patches = diff(currentVDom, newVDom)
      patch(rootNode, patches);
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
