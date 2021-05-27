import jsonp from 'jsonp'

const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
const res = jsonp(url, {})
console.log(res)