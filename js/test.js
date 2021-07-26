const { generateRoutes } = require('vue-route-generator')

const code = generateRoutes({
  pages: '/Users/huanxi/learn/projects/html-js/js/pages',
  nested: true
})

console.log(code)

// import routes from 'vue-auto-routing'
// console.log(routes)