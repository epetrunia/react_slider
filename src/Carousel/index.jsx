import React, { Component } from 'react';
import styles from './Carousel.module.scss';
import classNames from 'classnames';
import Slide from './Slide';
import Controls from './Controls';
import Icon from '@mdi/react';
import PropTypes from 'prop-types';
import {
  mdiSkipPrevious,
  mdiSkipNext,
  mdiFullscreen,
  mdiFullscreenExit,
} from '@mdi/js';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
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
    this.setState({
      isFullScreen: !isFullScreen,
    });
  };

  render() {
    const { slides } = this.props;
    const { currentIndex, isFullScreen } = this.state;
    const prevBtnStyle = classNames(styles.controlBtn, styles.prevBtn);
    const nextBtnStyle = classNames(styles.controlBtn, styles.nextBtn);
    const fullScreenBtn = classNames(styles.controlBtn, styles.fullScreenBtn);

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
              {...slides[currentIndex]}
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
          <Controls next={this.nextIndex} />
        </section>
      </article>
    );
  }
}

Carousel.propTypes = {
  slide: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ),
};

export default Carousel;
