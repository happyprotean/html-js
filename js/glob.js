var glob = require("glob")
var fg = require("fast-glob")
const path = require('path')

console.log(path.resolve(__dirname))
console.log(glob.sync(path.resolve(__dirname) + '/*.js'))
console.log(fg.sync(path.resolve(__dirname) + '/*.js'))