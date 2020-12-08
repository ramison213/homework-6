import React, { Component } from 'react';
import CalcRandomNum from './CalcRandomNum';

class Task4 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h1>Task 4</h1>
        <p className="description">
          4. Напишите компонент, который принимает 2 prop, min and max, каждый раз, когда мы
          нажимаем на кнопку, он должен генерировать случайное число между минимальным и
          максимальным значениями из prop. Значение должно отображаться на экране при каждом
          нажатии. Кроме того, если случайное число является четным числом, меняйте его, если
          это нечетное число, не меняйте его.
        </p>

        <CalcRandomNum min={1} max={51} />
      </div>


    )
  }
}

export default Task4
