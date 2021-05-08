const a = {name: 'huanxi', age: 26, gender: 'male', work: 'meituan'}
const b = {name: 'xinyi', age: 23, gender: 'female'}
const c = Object.assign({}, a, b)
console.log(c)