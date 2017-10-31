module.exports = io => {

  io.on('connection', (socket) => {
    console.log(' A client has connected! Client ID: ', socket.id);

    socket.on('send-level', (level) =>{
      socket.broadcast.emit('update-level', level)
    })
  })
}
