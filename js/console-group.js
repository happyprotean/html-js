console.log('outer')

console.group('group1')
console.log('inner group1')
console.warn('warning1')
console.groupEnd()

console.group('group2')
console.log('inner group2')
console.warn('warning2')
console.groupEnd()

console.group('group1')
console.log('the other inner group1')
console.warn('the other warning')
console.groupEnd()
