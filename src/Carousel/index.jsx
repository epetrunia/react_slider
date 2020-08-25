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
  mdiPlay,
  mdiPause,
  mdiCogOutline,
} from '@mdi/js';

export class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      isPlaying: false,
      isFullScreen: false,
      delay: 2000,
      isOpen: false,
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

  autoplayToggler = () => {
    const { isPlaying } = this.state;
    this.setState({
      isPlaying: !isPlaying,
    });
  };

  settingToggler = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  };

  speedHandler = (event) => {
    const value = Number(event.target.getAttribute('value'));
    this.setState({
      delay: value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { isPlaying, delay } = this.state;
    clearTimeout(this.timeoutId);
    this.timeoutId = null;
    if (isPlaying) {
      this.timeoutId = setTimeout(this.nextIndex, delay);
    }
  }

  render() {
    const { slides } = this.props;
    const { currentIndex, isFullScreen, isPlaying, isOpen } = this.state;
    const prevBtnStyle = classNames(styles.controlBtn, styles.prevBtn);
    const nextBtnStyle = classNames(styles.controlBtn, styles.nextBtn);
    const fullScreenBtn = classNames(styles.controlBtn, styles.fullScreenBtn);
    const playBtnStyle = classNames(styles.controlBtn, styles.playBtn);
    const settingBtnStyle = classNames(styles.controlBtn, styles.settingsBtn);
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
          <Icon
            className={playBtnStyle}
            onClick={this.autoplayToggler}
            path={isPlaying ? mdiPause : mdiPlay}
          />
          <Icon
            onClick={this.settingToggler}
            className={settingBtnStyle}
            path={mdiCogOutline}
          />
          {isOpen && (
            <ul className={styles.settingsList}>
              <li>Delay:</li>
              <li value='1000' onClick={this.speedHandler}>
                1 sec
              </li>
              <li value='2000' onClick={this.speedHandler}>
                2 sec
              </li>
              <li value='3000' onClick={this.speedHandler}>
                3 sec
              </li>
              <li value='4000' onClick={this.speedHandler}>
                4 sec
              </li>
              <li value='5000' onClick={this.speedHandler}>
                5 sec
              </li>
            </ul>
          )}
        </section>
      </article>
    );
  }
}

export default Carousel;
