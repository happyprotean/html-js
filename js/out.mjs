async function redisGet() {
  const res = await setTimeout(() => {
    console.log('await')
  }, 2000)
  console.log('1')
  return res
}

let a = 0
redisGet().then(
  a = 2
)
console.log(a)

const res1 = await fun1()
const res2 = res1 + await fun2()




function out() {
  return redisGet()
}

let res = out()
res = res + 1
console.log(res)

