import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import Landing from './components/landing.js';
import Contact from './components/contact.js';
import About from './components/about.js';
import Projects from './components/projects.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <Landing />
          <About />
          <Projects />
          <Contact />
      </div>
    );
  }
}

export default App;
