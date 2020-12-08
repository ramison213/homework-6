import React, { Component } from 'react'

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gallery: [],
      // activeImg: null
    };
  }

  componentDidMount() {
    fetch('https://picsum.photos/v2/list?page=2&limit=10')
      .then((response) => response.json())
      .then((gallery) => {
        this.setState({
          gallery
        });
        this.setState({
          activeImg: 0
        })
      }
    )
  }

  nextImg = () => {
    if(this.state.activeImg < (this.state.gallery.length - 1)) {
      this.setState({
        activeImg: this.state.activeImg + 1
      })
    } else {
      this.setState({
        activeImg: 0
      })
    }
  }

  prevImg = () => {
    if(this.state.activeImg > 0 && this.state.activeImg <= (this.state.gallery.length - 1)) {
      this.setState({
        activeImg: this.state.activeImg - 1
      })
    } else {
      this.setState({
        activeImg: this.state.gallery.length - 1
      })
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Gallery here</h1>
        <div className="gallery-wrap">
          <button className="prev-btn" onClick={this.prevImg.bind(this)}>&lt; PREV</button>
            {
              this.state.gallery
                .filter((el, i) => i == this.state.activeImg)
                .map((img, i) => (
                  <div className="gallery-img-wrap" key={i}>
                    <img className="gallery-img" src={img.download_url} alt="Pic" height="250" />
                    <div className="gallery-img-author">{img.author}</div>
                  </div>
                )
              )
            }
          <button className="next-btn" onClick={this.nextImg.bind(this)}>NEXT &gt;</button>
        </div>
      </div>
    )
  }
}

export default Gallery