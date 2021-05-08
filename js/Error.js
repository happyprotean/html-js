try {
  console.log('before error')
  throw new Error('Whoops!')
} catch (e) {
  console.error(e.name + ': ' + e.message)
}
