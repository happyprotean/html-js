function debounce (fun, delay) {
  let timer = null
  return function (args) {
    let _this = this
    clearTimeout(timer)
    timer = setTimeout(() => {
      fun.call(_this, args)
    }, delay)
  }
}

function throttle (fun, delay) {
  let last, timer
  return function (args) {
    let _this = this
    let now = +new Date()
    if (last && now < last + delay) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        last = now
        fun.call(_this, args)
      }, delay)
    } else {
      last = now
      fun.call(_this, args)
    }
  }
}

function axios () {
  console.log('axios')
}

let axiosDebounce = debounce(axios, 500)
