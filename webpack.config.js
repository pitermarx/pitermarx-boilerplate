require('babel-register')
var getConfig = require('hjs-webpack')
// var toHtml = require('vdom-to-html')
// var app = require('./src/containers/app').default
// var reducer = require('./src/reducers').default
// var createStore = require('redux').createStore
// var store = createStore(reducer)
// var html = {html: toHtml(app(store))};

module.exports = getConfig({
  in: 'src/main.js',
  out: 'public',
  clearBeforeBuild: true,
  html: function (data) {
    return {
      'index.html': data.defaultTemplate()
    }
  }
})
