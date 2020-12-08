import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookmark: {
        siteName: '',
        siteUrl: '',
        id: Date.now()
      }
    }
  }

  changeInputHandler = (event) => {
    this.setState({
      bookmark: { ...this.state.bookmark, [event.target.id]: event.target.value }
    })
  }

  resetInputHandler = (event) => {
    event.preventDefault();

    this.setState({
      bookmark: {
        siteName: '',
        siteUrl: '',
        id: Date.now()
      }
    })
  }

  render() {
    return (
      <div className="jumbotron">
        <h2>Bookmark your favorite Sites</h2>

        <form id="myForm" action="" onSubmit={this.resetInputHandler.bind(this)}>
          <div className="form-group">
            <label htmlFor="siteName">Site Name</label>
            <input
              type="text"
              className="form-control"
              id="siteName"
              placeholder="Website Name"
              onChange={this.changeInputHandler.bind(this)}
              value={this.state.bookmark.siteName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="siteUrl">Site URL</label>
            <input
              type="text"
              className="form-control"
              id="siteUrl"
              placeholder="Website URL"
              onChange={this.changeInputHandler.bind(this)}
              value={this.state.bookmark.siteUrl}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => this.props.onAddBookmark(this.state.bookmark)}
          >Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
