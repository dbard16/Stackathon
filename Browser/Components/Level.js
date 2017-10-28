import React, { Component } from 'react';
import axios from 'axios';


export default class Level extends Component {

  constructor(props) {
    super(props);
    this.state = {
      level: {}
    }
    this.handleClick = this.handleClick.bind(this);
  }

  fetchLevel( levelId ){
    axios.get(`/api/levels/${levelId}`)
    .then(res => res.data)
    .then(curLevel => {
      const level = curLevel[0]
      this.setState({
      level
    })});
  }

  componentDidMount(){
    const levelId = 1 || this.state.id
    this.fetchLevel(levelId)
  }

  handleClick(text, level){
    alert(text);
    this.fetchLevel(level)
  }



  render(){
    const { level } = this.state;
    const { options } = level;
    const { handleClick } = this;

    return (
      <div>
      <h1> Level {level.id} </h1>
        <div>
          { level.description }
        </div>
        { options ?
          options.map(option => {
            return (
              <div key={option.id}>
                <button className="btn" onClick={ ()=> handleClick(option.answerText, option.goToLevel) }> {option.description} </button>
              </div>
            )
          }) : ''
        }
      </div>
    )
  }
}


// const mapStateToProps = (state) => {
//   console.log(state);
//   const level = state.currentLevel;
//   return level
// }

// export default connect(mapStateToProps, null)(Level);
