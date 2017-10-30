import React, { Component } from 'react';

export default class OpponentCircle extends Component {

  listenCircle(){
    console.log(this);
    // this.props.socket.on('update-circle', (circle) => {
    //   return (circle)
    // })
  }

  render(){
    const { listenCircle } = this
    return(
      <div>
        {
           listenCircle()
           }
        }
      </div>
    )
  }
}
