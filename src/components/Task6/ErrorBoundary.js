import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div className="text-center">
          <h2>Error :(</h2>
          <h3>We are working hard to resolve it</h3>
          <p>Error info: fatal server request</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary