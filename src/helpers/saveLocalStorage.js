// if localStorage is not defined, do nothing here
export const storage = typeof (localStorage) == 'undefined' ? null : localStorage

// this function transforms the reducer in a "state-saving" reducer
export default function (reducer, name) {
  if (!storage) {
    return reducer
  }
  // try here to get the initial state
  const initialStateJson = storage.getItem(name)
  const initialState = initialStateJson ? JSON.parse(initialStateJson) : undefined

  // return a new reducer that saves the state in localStorage
  return function (state = initialState , action) {
    // call the base reducer
    const newState = reducer(state, action)
    // do nothing if state didn't change
    if (newState !== state) {
      storage.setItem(name, JSON.stringify(newState))
    }
    // return the state
    return newState
  }
}
