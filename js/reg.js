// let re
// re = /()/
// console.log(re.test('-acb123'))

// const str = "/audit-new/myProcessIndex"
// const result = str.match(/(\w+Index){1}/)
// console.log(result)
// console.log('object' + undefined)

function hasClass(el, className){
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el)
}

console.log(hasClass('slider slider-scroll test', 'slide'))
