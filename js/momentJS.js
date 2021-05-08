import moment from 'moment'

let a = moment()
console.log(a.subtract(1, "days").format("YYYY-MM"))