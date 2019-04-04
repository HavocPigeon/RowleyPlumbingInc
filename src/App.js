import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import Landing from './components/landing.js';
import Contact from './components/contact.js';
import About from './components/about.js';
import Projects from './components/projects.js';
import Landingcover from './components/landingcover.js';
import Landingcovertwo from './components/landingcovertwo.js';
import Bottomnavbar from './components/bottomnavbar.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      scroll: 0,
    }
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  //scroll y position
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    this.setState({
        scroll: window.scrollY
    })
  }

  render() {
    return (
      <div className="App">
          <Navbar scrollposition={this.state.scroll} />
          <Landingcover />
          <Landing />
          <Bottomnavbar scrollposition={this.state.scroll} />
          <div className="sectiontwo">
            <Landingcovertwo />
            <About />
            <Projects />
            <Contact />
          </div>
      </div>
    );
  }
}

export default App;
