import React, { Component } from 'react';
import styles from './Carousel.module.scss';
import Slide from './Slide';
import Icon from '@mdi/react';
import { mdiSkipPrevious, mdiSkipNext } from '@mdi/js';

export class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      isPlaying: false,
    };
  }

  nextIndex = () => {
    const { currentIndex } = this.state;
    const { slides } = this.props;
    this.setState({
      currentIndex: (currentIndex + 1) % slides.length,
    });
  };

  prevIndex = () => {
    const { currentIndex } = this.state;
    const { slides } = this.props;
    this.setState({
      currentIndex: (currentIndex - 1 + slides.length) % slides.length,
    });
  };

  render() {
    const { slides } = this.props;
    const { currentIndex } = this.state;
    return (
      <article className={styles.container}>
        {slides.map((item, index) => (
          <Slide
            key={item.id}
            isCurrent={currentIndex === index}
            download={Math.abs(index - currentIndex) < 2}
            slide={item}
          />
        ))}
        <Icon onClick={this.prevIndex} path={mdiSkipPrevious} size={3}></Icon>
        <Icon onClick={this.nextIndex} path={mdiSkipNext} size={3}></Icon>
      </article>
    );
  }
}

export default Carousel;
