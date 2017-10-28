import React, { Component } from 'react';
import Level from './Level'

export default class Template extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentLevel: 1,

    }
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level){
    this.setState({currentLevel: level})
  }



  render(){
    const xPos  = this.state.currentLevel * 40 - 20
    const { changeLevel } = this


    return (
     <div>
      <svg>
        <line x1={20} y1={20} x2={200} y2={20} stroke="black" strokeWidth="10" strokeLinecap="round" />
        <circle cx={xPos} cy={20} r={10} fill="red" />

        <text x={15} y={50} stroke="black">1------2------3------4</text>
        {/*<circle cx={60} cy={20} r={10} fill="blue" /> */}
      </svg>
      <Level changeLevel={ changeLevel }/>
    </div>

     )
  }
}
