import path from 'path'
import { fileURLToPath } from 'node:url'

// // delete "type": "module" in package.json
// console.log(__dirname)
// console.log(path.resolve(__dirname, 'components'))
// console.log(path.resolve(__dirname, './components'))

console.log(path.extname('../reg.js'))
console.log('--', new URL('../reg', import.meta.url))
console.log('--', fileURLToPath(new URL('../reg', import.meta.url)))