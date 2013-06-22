var assert = require('assert')
var print = require('./index')
var html = print.html

assert.equal(html('Hello {}', '<world>!'), 'Hello &lt;world&gt;!')
assert.equal(html('Hello {!}', '<em>world!</em>'), 'Hello <em>world!</em>')
assert.equal(html('{}, {}, {}', 1, 2, 3), '1, 2, 3')
assert.equal(html('{2}, {1}, {0}, {1}', 1, 2, 3), '3, 2, 1, 2')
assert.equal(html('Hello {!0}', '<em>world!</em>'), 'Hello <em>world!</em>')

assert.equal(print.url('/{}', 'hello world'), '/hello%20world')

console.log('Ok')
