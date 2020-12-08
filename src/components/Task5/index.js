import React, { Component } from 'react';

class Task5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          posts: json
        });
      }
    )
  }

  render() {
    return (
      <div className="container">
        <h1>Task 5</h1>
        <p className="description">
          5. Сделайте GET запрос к этому API и получите список сообщений. Отобразите каждую из
          этих данных, как показано на рисунке Вы можете выбрать стиль и сделать его лучше, чем
          это, но это только пример того, как данные должны быть представлены на странице.
          Примечание. Обязательно сделайте запрос, как только приложение откроется в браузере.
          Простой макет
        </p>
        <ul>
          {
            this.state.posts.map((post, i) => (
              <li key={i} className="card">
                <span><b>Id: </b>{ post.id }</span>
                <span><b>Title: </b>{ post.title }</span>
                <span><b>Body: </b>{ post.body }</span>
              </li>)
            )
          }
        </ul>
      </div>
    )
  }
}

export default Task5
