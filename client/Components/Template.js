import React, { Component } from 'react';
import Level from './Level'
import socketIOClient from 'socket.io-client';
import randomColor from 'randomColor'


export default class Template extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentLevel: 1,
      color: randomColor(),
      socket: socketIOClient('http://localhost:1337'),
      opponentLevel: 0
    }
    this.changeLevel = this.changeLevel.bind(this);

    this.listenLevel = this.listenLevel.bind(this);
  }
  componentDidMount(){
    const socket = this.state.socket
      socket.on('connect', () => {
      console.log('Client connected')})
      this.listenLevel();
  }
  changeLevel(level){
    this.setState({currentLevel: level})
    this.state.socket.emit('send-level', this.state.currentLevel)
  }

  listenLevel(){

     this.state.socket.on('update-level', (level) => {

      this.setState({
        opponentLevel: level
      })

      })

  }


  render(){

    const xPos  = this.state.currentLevel * 40 - 20
    const { changeLevel } = this

    const { color, opponentLevel } = this.state
    console.log(opponentLevel);


    return (
     <div className="well">

      <svg>
        <line x1={20} y1={20} x2={200} y2={20} stroke="black" strokeWidth="10" strokeLinecap="round" />
        <circle cx={xPos} cy={20} r={10} fill={ color } />

        <text x={15} y={50} stroke="black">1------2------3------4</text>
        {/*<circle cx={60} cy={20} r={10} fill="blue" /> */}
      </svg>
      <div>
        Opponent just finished { opponentLevel }! Hurry up!
      </div>
      <Level changeLevel={ changeLevel }/>
    </div>

     )
  }
}
