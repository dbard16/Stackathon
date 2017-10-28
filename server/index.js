const express = require('express');
const app = express();
const socketio = require('socket.io');
const PORT = process.env.PORT  || 1337;
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db');
let server;

db.sync()
  .then(() => {
    server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    })
  })

const io = socketio(server);

io.on('connection', (socket) => {
  console.log('A client has connected! Client ID:', socket.id)

  socket.on('disconnect', () => {
    console.log('A client has disconnected. Client ID:', socket.id)
  })
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(path.join(__dirname, '..', 'public')));
app.use('/', express.static(path.join(__dirname, '..', 'node_modules')));
app.use('/api', require('./api'));
app.get('/*', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
