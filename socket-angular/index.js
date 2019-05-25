let express = require('express');

let app = express();

let http = require('http');
let server = http.Server(app);

let socketIo = require('socket.io');
let io = socketIo(server);

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
  console.log("Subscribed to me");

  socket.on('new-message', (message) => {
    console.log(message);
    io.emit('new-message', message);
  });
});

server.listen(port, ()=>{
  console.log(`listened on the port ${port}`);
})
