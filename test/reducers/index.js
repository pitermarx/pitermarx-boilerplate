import * as reducers from '../../src/reducers'
import * as constants from '../../src/constants'
import * as actions from '../../src/actions'
import test from 'tape'

test('url reducer', function (t) {
  t.plan(4)
  t.equal(typeof reducers.url, 'function')
  t.equal(reducers.url(undefined, {}), constants.Urls.HOME)
  t.equal(reducers.url('aaa', {type:'error'}), 'aaa')
  t.equal(reducers.url('aaa', actions.setUrl('bbb')), 'bbb')
})

test('todos reducer', function (t) {
  t.plan(5)
  t.equal(typeof reducers.todos, 'function')
  t.looseEqual(reducers.todos(undefined, {}), [])
  t.looseEqual(
    reducers.todos([], actions.addTodo('test')), 
    [{id:1, completed:false, text:'test'}])
    
  t.looseEqual(
    reducers.todos([{id:1, completed:false, text:'test'}], actions.addTodo('test2')), 
    [{id:1, completed:false, text:'test'},
    {id:2, completed:false, text:'test2'}])
  t.looseEqual(
    reducers.todos([{id:1, completed:false, text:'test'},
    {id:2, completed:false, text:'test2'}], actions.completeTodo(2)), 
    [{id:1, completed:false, text:'test'},
    {id:2, completed:true, text:'test2'}])
}) 