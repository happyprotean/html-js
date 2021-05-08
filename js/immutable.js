import Immutable from 'immutable'

// conver js data to immutable data
const iData = Immutable.fromJS({
  name: 'huanxi',
  age: '26'
})
console.log(iData)

// conver immutable data to js data
const jData = iData.toJS()
console.log(jData)

// change immutable data using set()
const iData_1 = iData.set('name', 'xinyi')
const jData_1 = iData_1.toJS()
console.log(jData_1)

// 合并两个immutable对象
const x = Immutable.fromJS({name: 'huanxi', age: 26})
const y = Immutable.fromJS({name: 'xinyi', age: 23, gender: 'female'})
const data = x.merge(y)
console.log(data.toJS())
