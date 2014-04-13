var assert = require('assert');
var path   = require('path');

var cwd  = process.cwd();
var HOME = process.env.HOME;

var resolve = require('../index.js');

assert.equal( resolve('a'), path.join(HOME, 'lib', 'node_modules', 'a') );
assert.equal( resolve('./a'), path.join(cwd, 'a') );

console.log('ok');
