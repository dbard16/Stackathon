module.exports = io => {

  io.on('connection', (socket) => {
    console.log(' A client has connected! Client ID: ', socket.id);

    socket.on('level-change', level =>{
      socket.broadcast('level-change', level)
    })
  })
}
