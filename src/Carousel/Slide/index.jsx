import React, { Component } from 'react';

class Slide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };
  }

  handleError = () => {
    this.setState({
      error: true,
    });
  };

  render() {
    const { slide, isCurrent, download } = this.props;
    const { error } = this.state;
    if (!error) {
      return (
        <figure>
          <img src={slide.src} alt={slide.title} />
          <figcaption>
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
          </figcaption>
        </figure>
      );
    }
  }
}

export default Slide;
