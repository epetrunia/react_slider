import React, { Component } from 'react';
import styles from './Slide.module.scss';
import classNames from 'classnames';
import plug from './error.jpg';

class Slide extends Component {
  constructor(props) {
    super(props);

    const img = new Image();
    img.addEventListener('load', this.handleLoad);

    this.state = {
      img,
      isLoaded: false,
    };
  }

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
    const { download, src } = this.props;
    const { isLoaded } = this.state;
    if (download && !isLoaded) {
      this.load();
    }
    if (src !== prevProps.src) {
      this.setState({
        isLoaded: false,
      });
    }
  }

  render() {
    const { isCurrent, src, title, description, download } = this.props;
    const { isLoaded } = this.state;
    const displaySlide = classNames(styles.slide, {
      [styles.currentSlide]: isCurrent,
    });
    if (download) {
      return (
        <figure className={displaySlide}>
          <img
            className={styles.imageWrapper}
            src={isLoaded ? src : plug}
            alt={title}
          />
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
