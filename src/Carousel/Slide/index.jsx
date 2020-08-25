import React, { Component } from 'react';
import styles from './Slide.module.scss';
import classNames from 'classnames';

class Slide extends Component {
  constructor(props) {
    super(props);

    const img = new Image();
    img.addEventListener('load', this.handleLoad);

    this.state = {
      img,
      isLoaded: false,
      error: null,
    };
  }

  handleError = () => {
    this.setState({
      error: true,
    });
  };

  handleLoad = () => {
    this.setState({
      isLoaded: true,
    });
  };

  load = () => {
    const { img } = this.state;
    const { src } = this.props;
    img.src = src;
  };

  componentDidMount() {
    const { download } = this.props;
    if (download) {
      this.load();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { src } = this.props;
    const { isLoaded, error } = this.state;
    if (src !== prevProps.src && isLoaded && !error) {
      this.load();
    }
  }

  render() {
    const { isCurrent, src, title, description, download } = this.props;
    const displaySlide = classNames(styles.slide, {
      [styles.currentSlide]: isCurrent,
    });
    if (download) {
      return (
        <figure className={displaySlide}>
          <img className={styles.imageWrapper} src={src} alt={title} />
          <figcaption className={styles.caption}>
            <h1>{title}</h1>
            <p className={styles.description}>{description}</p>
          </figcaption>
        </figure>
      );
    } else {
      return null;
    }
  }
}

export default Slide;
