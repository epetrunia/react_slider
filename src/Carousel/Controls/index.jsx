import React, { Component } from 'react';
import styles from './Controls.module.scss';
import classNames from 'classnames';
import Icon from '@mdi/react';
import { mdiPlay, mdiPause, mdiCogOutline } from '@mdi/js';

class Controls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      delay: 2000,
      isPlaying: false,
      isOpen: false,
    };
  }

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
    const { next } = this.props;
    clearTimeout(this.timeoutId);
    this.timeoutId = null;
    if (isPlaying) {
      this.timeoutId = setTimeout(next, delay);
    }
  }

  render() {
    const { isPlaying, isOpen } = this.state;
    const playBtnStyle = classNames(styles.controlBtn, styles.playBtn);
    const settingBtnStyle = classNames(styles.controlBtn, styles.settingsBtn);
    return (
      <div>
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
      </div>
    );
  }
}

export default Controls;
