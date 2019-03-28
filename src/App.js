import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import Landing from './components/landing.js';
import Contact from './components/contact.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <Landing />
          <Contact />
      </div>
    );
  }
}

export default App;
