import React, { Component } from 'react'
import Gallery from './Gallery'

class Task7 extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="container">
        <h1>Task 7</h1>
        <p className="description">
          7. Создать Gallery компонент, который после загрузки страницы вы делаете запрос к этому API. 
          Пожалуйста, прочитайте документацию по API и получите 10 изображений, и там должна быть левая и правая кнопки а 
          изображение находится между ними, где пользователь может щелкнуть, чтобы перейти к следующему или предыдущему изображению. 
          Каждый раз, когда нажимается кнопка, автор изображения должен отображаться под изображением, и по мере изменения изображений 
          автор также изменяется.
        </p>
        <Gallery />
      </div>
    )
  }
}

export default Task7
