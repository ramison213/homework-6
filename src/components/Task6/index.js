import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary'
import Card from './Card'

class Task6 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h1>Task 6</h1>
        <p className="description">
          6. Сделайте запрос к этому API, он вернет ошибку. Убедитесь, что ваше приложение не падает, обработав ошибку, возвращенную с сервера. Покажите страницу ошибки подобную этой. (Вы не должны обрабатывать эту ошибку с помощью .catch(), вместо этого вы должны использовать ErrorBoundaries, предоставленную React для этого. Я намеренно не упомянул об этом в нашем уроке, потому что хотел, чтобы вы сами все выяснили, выполняя домашнее задание. Это не лучший способ обработки ошибок из запроса API. Однако, несмотря на то, что в вашем запросе API есть .catch(), на случай, если в вашем приложении произойдет какая-либо другая ошибка, этот метод жизненного цикла поможет вам хорошо его уловить.)
        </p>
        <ErrorBoundary>
          <Card />
        </ErrorBoundary>
      </div>
    );
  }
}

export default Task6
