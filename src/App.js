import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar />  
          </header>            
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Code} />
            <Route exact path="/team" component={Contact} />
            <Route exact path="/contact" component={info} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
