function func() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('a.js')
      resolve()
    }, 3000)
  })
}

(async function() {
  await func()
  console.log('a.js after func')
})()