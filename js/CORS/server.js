import express from 'express'
const app = express()
const port = 3005

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.get('/server_1', (req, res) => {
  res.send('server 1')
})

app.put('/server_1', (req, res) => {
  res.send('server 1')
})

app.listen(port, () => {
  console.log(`example listening at ${port}`)
})