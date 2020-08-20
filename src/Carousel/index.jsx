import React, { Component } from 'react';
import styles from './Carousel.module.scss';
import classNames from 'classnames';
import Slide from './Slide';
import Icon from '@mdi/react';
import {
  mdiSkipPrevious,
  mdiSkipNext,
  mdiFullscreen,
  mdiFullscreenExit,
} from '@mdi/js';

export class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      isPlaying: false,
      isFullScreen: false,
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

  fullScreenToggler = () => {
    const { isFullScreen } = this.state;
    if (isFullScreen) {
      this.setState({
        isFullScreen: false,
      });
    } else {
      this.setState({
        isFullScreen: true,
      });
    }
  };
  render() {
    const { slides } = this.props;
    const { currentIndex, isFullScreen } = this.state;
    const prevBtnStyle = classNames(styles.controlBtn, styles.prevBtn);
    const nextBtnStyle = classNames(styles.controlBtn, styles.nextBtn);
    const fullScreenBtn = classNames(styles.controlBtn, styles.fullScreenBtn);
    console.log(isFullScreen);
    return (
      <article className={styles.container}>
        <section
          className={isFullScreen ? styles.fullScreenMode : styles.carousel}
        >
          {slides.map((item, index) => (
            <Slide
              key={item.id}
              isCurrent={currentIndex === index}
              download={Math.abs(index - currentIndex) < 2}
              slide={item}
            />
          ))}
          <Icon
            className={prevBtnStyle}
            onClick={this.prevIndex}
            path={mdiSkipPrevious}
          ></Icon>
          <Icon
            className={nextBtnStyle}
            onClick={this.nextIndex}
            path={mdiSkipNext}
          ></Icon>
          <Icon
            className={fullScreenBtn}
            onClick={this.fullScreenToggler}
            path={isFullScreen ? mdiFullscreenExit : mdiFullscreen}
          ></Icon>
        </section>
      </article>
    );
  }
}

export default Carousel;
