let element = {
  style: {
    overflow: ''
  }
}

function setStyle(element, styles) {
  Object.assign(element.style, styles)
}

let containerOverflow = element.style.overflow

setStyle(element, {
  overflow: 'hidden'
})

console.log(element)

setStyle(element, {
  overflow: containerOverflo
})

console.log(element)