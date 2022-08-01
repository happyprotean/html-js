let a = new Date("2021-05-02 01:01:00")

let b = new Date("2021-05-02 23:59:59")
console.log(a.getTime(), b.getTime(), a.getHours(), a.getMinutes())

let c = new Date('')
console.log(c, isNaN(c.getTime()))

console.log(isNaN(c))
c = new Date("2021-05-02")
console.log(isNaN(c))
console.log(typeof c)
console.log(isNaN({a: 1}))