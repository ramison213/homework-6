import React, { Component } from 'react'

class Task2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, text: 'Buy milk' },
        { id: 2, text: 'To do homework' }
      ],
      inputValue: ''
    };
  }

  changeInputHandler = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  addTodoHandler = () => {
    if (this.state.inputValue.trim()) {
      this.setState({
        todos: [...this.state.todos, { id: Date.now(), text: this.state.inputValue }],
        inputValue: ''
      })
    }
  }

  removeTodoHandler = (id) => {
    this.setState({
      todos: [...this.state.todos].filter(task => task.id !== id)
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Task 2, Task 3</h1>
        <p className="description">
          2. Создайте компонент Todo, который отображает список задач внутри тегов li. Компонент
          todo должен иметь поле ввода. Когда значение введено в поле и нажата кнопка ввода, это
          значение должно быть добавлено в список задач и отображено в браузере.
        </p>
        <p className="desciption">
          3. Каждый раз при нажатии любой задачи в списке необходимо удалить эту задачу из
          списка задач в компоненте Todo.
        </p>

        <div className="todo">
          <div className="mb-2">
            <input
              className="input-field mr-2"
              placeholder="Enter New Todo"
              onChange={this.changeInputHandler.bind(this)}
              value={this.state.inputValue}
            />
            <button type="button" onClick={this.addTodoHandler.bind(this)}>
              Add Todo
            </button>
          </div>

          <ul className="todos-list">
            {
              this.state.todos.map((todo, i) => (
                <li key={i} className="todo-item">
                  <span>{todo.text}</span>
                  <button onClick={this.removeTodoHandler.bind(this, todo.id)}>X</button>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Task2
