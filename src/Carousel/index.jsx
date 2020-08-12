import React, { Component } from 'react';
import Slide from './Slide';

export class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      isPlaying: false,
    };
  }
  render() {
    const { slides } = this.props;
    const { currentIndex } = this.state;
    return (
      <div>
        {slides.map((item, index) => (
          <Slide
            isCurrent={currentIndex === index}
            download={Math.abs(index - currentIndex < 2)}
            slide={item}
          />
        ))}
      </div>
    );
  }
}

export default Carousel;
