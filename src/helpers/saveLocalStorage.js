const ls = typeof(localStorage) == 'undefined' ? null : localStorage

export const storage = ls
export default function (reducer, name){
  if (!ls) {
    return reducer
  }
  const initialStateJson = ls.getItem(name)
  const initialState = initialStateJson ? JSON.parse(initialStateJson) : undefined
  return function(state = initialState, action) {
    const newState = reducer(state, action)
    if (newState !== state) {
      ls.setItem(name, JSON.stringify(newState))
    }
    return newState
  }
}
