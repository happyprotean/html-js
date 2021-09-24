import express from 'express'
let app = express()
app.get('/promise', function(req, res) {
  setTimeout(() => {
    res.send('hello promise')
  }, 2000)
})
app.listen(3000)