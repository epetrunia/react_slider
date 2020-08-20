import React, { Component } from 'react';
import styles from './Slide.module.scss';
import classNames from 'classnames';

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
    const displaySlide = classNames(styles.slide, {
      [styles.currentSlide]: isCurrent,
    });
    if (download && !error) {
      return (
        <figure className={displaySlide}>
          <img
            className={styles.imageWrapper}
            src={slide.src}
            alt={slide.title}
          />
          <figcaption className={styles.caption}>
            <h1>{slide.title}</h1>
            <p className={styles.description}>{slide.description}</p>
          </figcaption>
        </figure>
      );
    } else {
      return null;
    }
  }
}

export default Slide;
