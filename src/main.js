// import styles
import './styles/main.styl'

// import information
import renderer from './vdomRedux'
import reducer from './reducers'
import app from './containers/app'

// bootstrap app
renderer(
  document.getElementById('root'),
  app,
  reducer)
