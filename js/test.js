let str = 'hello worlld!'
console.log(str.indexOf('ll')) // 返回第一个匹配字符的位置，-1表示无匹配
// 返回布尔值，第二个参数表示开始搜索的位置
console.log(str.includes('ll', 1))
console.log(str.startsWith('hell'))
// 返回布尔值，第二个参数表示在前n个字符中查找
console.log(str.endsWith('world', 7))