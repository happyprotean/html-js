// let re
// re = /()/
// console.log(re.test('-acb123'))

// const str = "/audit-new/myProcessIndex"
// const result = str.match(/(\w+Index){1}/)
// console.log(result)
// console.log('object' + undefined)

// function hasClass(el, className){
//   let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
//   return reg.test(el)
// }

// console.log(hasClass('slider slider-scroll test', 'slide'))

let ua = 'userAgent  Mozilla/5.0 (Linux; Android 9.3.1; V1809A Build/PKQ1.181030.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/68.0.3440.91 Mobile Safari/537.36 TitansX/20.7.8 KNB/1.2.0 android/9 dpcrm/com.dianping.crm/5.3.3 App/10k20/5.3.3 apollo/5.3.3'

function getAndroidVersion() {
  ua = ua.toLowerCase()
  let match = ua.match(/android\s([0-9.]*)/i)
  console.log(match)
  return match ? match[1] : ''
}

// let v = getAndroidVersion()
// console.log(v[0] === '9')

function maskIdNum(idNum) {
  if (!idNum) return '';
  return idNum.replace(/^(.{4})(\d+)(.{4})$/, function(match, p1, p2, p3) {
    console.log('111', p1, p2, p3)
    return p1 + '*'.repeat(p2.length) + p3
  });
}

let str = '342201199010101234'
console.log('res', maskIdNum(str))