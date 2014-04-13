var test = require('tap').test;

var resolve = require('../index.js');

test('accepts custom root', function (t){
  var path = resolve('token', '/a')

  t.equals(path, '/a/token')
  t.end()
})

test('accepts absolute directories', function (t){
  var path = resolve('/token', '/a')

  t.equals(path, '/token')
  t.end()
})

test('normalizes directories', function (t){
  var path = resolve('/token/../a/../b', '/a')

  t.equals(path, '/b')
  t.end()
})
