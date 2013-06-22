var escapeHTML = require('escape-html')

function print(args, escape) {
  var str = args[0]
    , i = 1

  return str.replace(/\{(\!)?(\d+)?\}/g, function(_, raw, index) {
    index = index ? Number(index) + 1 : i
    i++
    return raw ? args[index] : escape(''+args[index])
  })
}

exports = module.exports = print

exports.html = function() {
  return print(arguments, escapeHTML)
}

exports.url = function() {
  return print(arguments, encodeURIComponent)
}
