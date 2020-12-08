import React from 'react'

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFatalResponse: false
    };
  }

  componentDidMount() {
    fetch('https://github.com/kkmkkkkk')
      .then(null, this.onRejected);
  }

  onRejected = () => {
    this.setState({
      isFatalResponse: true
    })
  }

  render() {
    if (this.state.isFatalResponse) {
      throw new Error('Server Error');
    }
    return (
      <div>
        <h1>Success</h1>
      </div>
    )
  }
}

export default Card