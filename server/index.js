const express = require('express');
const app = express();
const PORT = process.env.PORT  || 1337;
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db');
const server = app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`))
const io = require('socket.io')(server);

require('./socket')(io)
db.sync().then(() => console.log(`DB Synced`));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(path.join(__dirname, '..', 'public')));
app.use('/', express.static(path.join(__dirname, '..', 'node_modules')));
app.use('/api', require('./api'));
app.use('/', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
