import React, { Component } from 'react';


export default class Timer extends Component {
  constructor(props){
    super(props);
    this.state = {
      secondsElapsed: 0
    }
  }



  componentDidMount() {
    setInterval(() => this.setState({secondsElapsed: this.state.secondsElapsed + 1}), 1000)
  }


  render(){

    return(
      <div>

        <h4> It's already taken you {this.state.secondsElapsed} seconds and you're only this far?!</h4>

      </div>
    )
  }
}
