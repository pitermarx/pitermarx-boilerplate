import diff from 'virtual-dom/diff'
import patch from 'virtual-dom/patch'
import virtualize from 'vdom-virtualize'
import { createStore } from 'redux'

// app bootstrapper
export default function(rootNode, app, reducer) {
  // creates a store with the __INITIAL_STATE__
  const store = createStore(reducer, JSON.parse(window.__INITIAL_STATE__))
  // gets the current VDOM from the DOM
  let currentVDom = virtualize(rootNode)
  const render = () => {
    requestAnimationFrame(() => {
      // get a new VDOM representation
      const newVDom = app(store)
      // get the diff from the previous one
      const patches = diff(currentVDom, newVDom)
      // apply diff
      patch(rootNode, patches);
      // save new VDom
      currentVDom = newVDom
      
      // if url changed, update the history
      const url = store.getState().url
      if (location.pathname !== url) {
        history.pushState(null, null, url)
      }
    })
  }
  
  // when the state changes, render the app
  store.subscribe(render)
  // start the app
  render()
  
  // if the user hits the back/forward buttons
  // change state on store
  window.addEventListener('popstate', () => {
    store.dispatch({type: 'SET_URL', url: location.pathname})
  })
}
