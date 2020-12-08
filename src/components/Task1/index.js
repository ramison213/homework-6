import React, { Component } from 'react'

class Task1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: ['name1', 'name2', 'name3', 'name4', 'name5', 'name6', 'name7', 'name8'],
      randomName: 'Cлучайное имя',
    };
  }

  renderRandomName = () => {
    const length = this.state.names.length;
    this.setState({
      randomName: this.state.names[Math.floor(Math.random() * length)]
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Task 1</h1>
        <p className="description">
          1. Создайте компонент, который имеет список различных имен в своем состоянии, и
          каждый раз, когда я нажимаю на кнопку, он должен выбрать случайное имя и отобразить
          его в браузере, завернутый в тег h1.
        </p>
        <div className="text-center">
          <button type="button" onClick={this.renderRandomName.bind(this)}>
            Отобразить случайное имя
          </button>
        </div>
        <h1>{this.state.randomName}</h1>
      </div>
    )
  }
}

export default Task1
