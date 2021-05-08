function testable(target){
  target.isTestable = true
}

@testable
class MyTestableClass {
  name = 'huanxi'
}

console.log(MyTestableClass.isTestable, MyTestableClass.name)