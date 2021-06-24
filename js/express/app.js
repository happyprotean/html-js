import express from 'express'
const app = express()
const port = 3002
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port, () => {
  console.log(`example listening at ${port}`)
})