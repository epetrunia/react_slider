import React, { Component } from 'react';
import './App.css';
import Carousel from './Carousel';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: [
        {
          title: 'Tapestry of Blazing Starbirth',
          description:
            'This image is one of the most photogenic examples of the many turbulent stellar nurseries the NASA/ESA Hubble Space Telescope has observed during its 30-year lifetime. The portrait features the giant nebula NGC 2014 and its neighbour NGC 2020 which together form part of a vast star-forming region in the Large Magellanic Cloud, a satellite galaxy of the Milky Way, approximately 163 000 light-years away.',
          src:
            'https://cdn.spacetelescope.org/archives/images/wallpaper2/heic2007a.jpg',
        },
        {
          title: 'Westerlund 2 — Hubble’s 25th anniversary image',
          description:
            'This NASA/ESA Hubble Space Telescope image of the cluster Westerlund 2 and its surroundings has been released to celebrate Hubble’s 25th year in orbit and a quarter of a century of new discoveries, stunning images and outstanding science.',
          src:
            'https://cdn.spacetelescope.org/archives/images/thumb700x/heic1509a.jpg',
        },
        {
          title: 'New view of the Pillars of Creation — visible',
          description:
            'The NASA/ESA Hubble Space Telescope has revisited one of its most iconic and popular images: the Eagle Nebula’s Pillars of Creation.',
          src:
            'https://cdn.spacetelescope.org/archives/images/thumb700x/heic1501a.jpg',
        },
      ],
    };
  }

  render() {
    const { slides } = this.state;
    console.log(slides);
    return <Carousel slides={slides} />;
  }
}

export default App;
