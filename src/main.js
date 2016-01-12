import renderer from './vdomRedux'
import reducer from './reducers'
import app from './containers/app'
import './styles/main.styl'

renderer(
  document.getElementById('root'), 
  app, 
  reducer)