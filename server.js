const express = require('express');
const app = express();
const socketio = require('socket.io');
const PORT = process.env.PORT  || 1337;
const path = require('path');

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})

const io = socketio(server);

io.on('connection', (socket) => {
  console.log('A client has connected! Client ID:', socket.id)

  socket.on('disconnect', () => {
    console.log('A client has disconnected. Client ID:', socket.id)
  })
})

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
