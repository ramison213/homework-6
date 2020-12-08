import React, { Component } from 'react';

class CalcRandomNum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNum: null
    };
  }

  randomNum = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  generateRandomHandler = (props) => {
    let num = this.randomNum(props.min, props.max);

    this.setState({
      randomNum: num
    })
  }

  componentDidMount() {
    this.generateRandomHandler(this.props)
  }

  componentDidUpdate() {
    if(this.state.randomNum%2 === 0) {
      this.generateRandomHandler(this.props)
    }
  }

  render() {
    return (
      <div className="text-center">
        <h2>Минимальное число: {this.props.min}</h2>
        <h2>Максимальное число: {this.props.max}</h2>
        <h2>Случайное из диапазона: {this.state.randomNum}</h2>
        <button onClick={this.generateRandomHandler.bind(this, this.props)}>Генерировать число</button>
      </div>
    )
  }
}

export default CalcRandomNum