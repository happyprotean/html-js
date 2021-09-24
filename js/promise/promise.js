const p = new Promise(function(resolve, reject){
  setTimeout(() => resolve('success'), 1000)
})

p
  .then((res) => {
    throw new Error('fail')
  })
  .catch(error => console.log(error))

