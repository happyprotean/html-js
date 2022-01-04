import WebSocket from 'ws'
let wss = new WebSocket.Server({port:3000});

wss.on('connection',function(ws) {
  ws.send('Hi')
  console.log('我：Hi')
  ws.on('message', function (data) {
    console.log(`女朋友：${data}`)
    if (/重要/.test(data)) {
      ws.send('你重要')
      console.log('我：你重要')
    } else if (/掉到河里/.test(data)) {
      ws.send('先救你')
      console.log('我：先救你')
    } else {
      ws.send('多喝热水')
      console.log('我：多喝热水')
    }
  });
})
