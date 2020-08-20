import React, { Component } from 'react';
import './App.css';
import Carousel from './Carousel';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: [
        {
          id: 1,
          title: '1. Tapestry of Blazing Starbirth',
          description:
            'This image is one of the most photogenic examples of the many turbulent stellar nurseries the NASA/ESA Hubble Space Telescope has observed during its 30-year lifetime. The portrait features the giant nebula NGC 2014 and its neighbour NGC 2020 which together form part of a vast star-forming region in the Large Magellanic Cloud, a satellite galaxy of the Milky Way, approximately 163 000 light-years away.',
          src:
            'https://cdn.spacetelescope.org/archives/images/wallpaper2/heic2007a.jpg',
        },
        {
          id: 2,
          title: '2. Westerlund 2 — Hubble’s 25th anniversary image',
          description:
            'This NASA/ESA Hubble Space Telescope image of the cluster Westerlund 2 and its surroundings has been released to celebrate Hubble’s 25th year in orbit and a quarter of a century of new discoveries, stunning images and outstanding science.',
          src:
            'https://cdn.spacetelescope.org/archives/images/screen/heic1509a.jpg',
        },
        {
          id: 3,
          title: '3. New view of the Pillars of Creation — visible',
          description:
            'The NASA/ESA Hubble Space Telescope has revisited one of its most iconic and popular images: the Eagle Nebula’s Pillars of Creation.',
          src:
            'https://cdn.spacetelescope.org/archives/images/screen/heic1501a.jpg',
        },
        {
          id: 4,
          title: '4. A rose made of galaxies',
          description:
            'This image of a pair of interacting galaxies called Arp 273 was released to celebrate the 21st anniversary of the launch of the NASA/ESA Hubble Space Telescope.',
          src:
            'https://cdn.spacetelescope.org/archives/images/screen/heic1107a.jpg',
        },
        {
          id: 5,
          title: '5. Extreme star cluster bursts into life in new Hubble image',
          description:
            'The star-forming region NGC 3603 - seen here in the latest Hubble Space Telescope image - contains one of the most impressive massive young star clusters in the Milky Way. Bathed in gas and dust the cluster formed in a huge rush of star formation thought to have occurred around a million years ago. ',
          src:
            'https://cdn.spacetelescope.org/archives/images/screen/heic0715a.jpg',
        },
      ],
    };
  }

  render() {
    const { slides } = this.state;
    return <Carousel slides={slides} />;
  }
}

export default App;
