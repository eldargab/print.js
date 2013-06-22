#print.js

Mini template (format) function for html, urls, etc

##Examples

```javascript
var print = require('print')
print.html('Hello {}', '<world>!') //=> 'Hello &lt;world&gt;!'
print.html('Hello {!}', '<em>world!</em>') //=> 'Hello <em>world!</em>'
print.html('{2}, {1}, {0}', 0, 1, 2) //=> '3, 2, 1'
print.url('/{}', 'hello world') // => '/hello%20world'
```

##Installation

via component

```
component install eldargab/print.js
```

##License

MIT
