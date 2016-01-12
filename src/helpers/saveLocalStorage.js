// if localStorage is not defined, do nothing here
const ls = typeof(localStorage) == 'undefined' ? null : localStorage

export const storage = ls

// this function transforms the reducer in a "state-saving" reducer
export default function (reducer, name){
  if (!ls) {
    return reducer
  }
  // try here to get the initial state
  const initialStateJson = ls.getItem(name)
  const initialState = initialStateJson ? JSON.parse(initialStateJson) : undefined
  
  // return a new reducer that saves the state in localStorage
  return function(state = initialState, action) {
    // call the base reducer
    const newState = reducer(state, action)
    // do nothing if state didn't change
    if (newState !== state) {
      ls.setItem(name, JSON.stringify(newState))
    }
    // return the state
    return newState
  }
}
