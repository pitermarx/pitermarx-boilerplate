require('babel-register')
var getConfig = require('hjs-webpack')
var toHtml = require('vdom-to-html')
var app = require('./src/containers/app').default
var reducer = require('./src/reducers').default
var createStore = require('redux').createStore

function getHtml(state){
  var store = createStore(reducer, state)
  var jsonState = JSON.stringify(state);
  var script = state ? "<script>window.__INITIAL_STATE__ = '"+jsonState+"'</script>" : ""
  return {
    html: toHtml(app(store)) + script,
    title: 'pitermarx-boilerplate'
  }
}

module.exports = getConfig({
  in: 'src/main.js',
  out: 'public',
  clearBeforeBuild: true,
  html: function (data) {
    return {
      'index.html': data.defaultTemplate(getHtml({url:'/'})),
      'active.html': data.defaultTemplate(getHtml({url:'/active'})),
      'completed.html': data.defaultTemplate(getHtml({url:'/completed'})),
    }
  }
})
