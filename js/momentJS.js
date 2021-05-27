import moment from 'moment'
import dayjs from 'dayjs'

let a = moment()
console.log(a.subtract(1, "days").format("YYYY-MM"))

let b = dayjs().format()
console.log(b)
b = dayjs(new Date()).format('YYYY-MM')
console.log(b)