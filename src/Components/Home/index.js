import React, { Component } from "react";
import ScrollableAnchor from 'react-scrollable-anchor'

import Hero from './hero.js';
import About from './about.js';
import Services from './services.js';
import Team from './team.js';
import Contact from './contact.js';
import Footer from './footer.js';

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <div style={{ marginTop: '3em' }}></div>
        <ScrollableAnchor id={'about'}>
            <About />
        </ScrollableAnchor>
        <div style={{ marginTop: '5em' }}></div>
        <ScrollableAnchor id={'services'}>
            <Services />
        </ScrollableAnchor>
        <div style={{ marginTop: '5em' }}></div>
        <ScrollableAnchor id={'team'}>
            <Team />
        </ScrollableAnchor>
        <div style={{ marginTop: '5em' }}></div>
        <ScrollableAnchor id={'contact'}>
            <Contact />
        </ScrollableAnchor>
        <div style={{ marginTop: '5em' }}></div>
        <Footer />
      </div>
    );
  }
}
 
export default Home;