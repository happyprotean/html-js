{
  // promise内部的throw会被catch捕获，而不是try-catch捕获
  const promise = new Promise(function(resolve, reject){
    throw 'error occured'
  })
  try{
    promise.then((value) => console.log('success', value)).catch(ev => console.log(ev))
  } catch (ev) {}
}

{
  function timeout(ms){
    return new Promise(function(resolve, reject){
      setTimeout(resolve, ms, 'done')
    })
  }
  const p = timeout(100)
  p.then(value => console.log(value)).catch(ev => console.log(ev))
}


