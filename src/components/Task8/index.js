import React, { Component } from 'react'
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

class Task8 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookmarks: []
    };
  }

  componentDidMount() {
    if (localStorage.bookmarks) {
      const bookmarks = JSON.parse(localStorage.bookmarks);

      this.setState({
        bookmarks
      })
    }
  }

  componentDidUpdate() {
    localStorage.bookmarks = JSON.stringify(this.state.bookmarks);
  }

  addBookmark = (newBookmark) => {
    if (this.validateForm(newBookmark.siteName, newBookmark.siteUrl)) {
      this.setState({
        bookmarks: [...this.state.bookmarks, newBookmark],
      })
    }
  }

  removeBookmark = (id) => {
    this.setState({
      bookmarks: [...this.state.bookmarks].filter(bookmark => bookmark.id !== id)
    })
  }

  validateForm = (siteName, siteUrl) => {
    if (!siteName || !siteUrl) {
      alert('Please fill the form');
      return false;
    }

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (!siteUrl.match(regex)) {
      alert('Please use a valid url');
      return false;
    }

    return true;
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Form onAddBookmark={this.addBookmark} />
        <Results bookmarks={this.state.bookmarks} onRemoveBookmark={this.removeBookmark} />
        <Footer />
      </div>
    )
  }
}

export default Task8
