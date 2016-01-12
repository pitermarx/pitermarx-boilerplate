export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const SET_VISIBILITY = 'SET_VISIBILITY'
export const SET_URL = 'SET_URL'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const Urls = {
  [VisibilityFilters.SHOW_ALL]: '/',
  [VisibilityFilters.SHOW_COMPLETED]: '/completed',
  [VisibilityFilters.SHOW_ACTIVE]: '/active'
}
