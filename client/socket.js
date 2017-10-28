import io from 'socket.io-client';
import { fetchLevel } from './store';

const socket = io(window.location.origin);

socket.on('connect', () => {
  console.log('Connected to the server');
})
  socket.on('level-change', level => {
    fetchLevel(level);
  });


export default socket;
