import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import Landing from './components/landing.js';
import Contact from './components/contact.js';
import About from './components/about.js';
import Projects from './components/projects.js';
import Landingcover from './components/landingcover.js';

class App extends Component {
  constructor(){
    super();
    this.selector = React.createRef();
    this.state = {
      scroll: 0,
      aboutPositionY: 0,
    }
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
    const rect = this.selector.current.getBoundingClientRect();
    setTimeout(() => {
      this.setState({
        aboutPositionY: rect.top,
      })
      console.log(this.state.aboutPositionY);
    }, 100);
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
          <Navbar scrollposition={this.state.scroll}/>
          <Landingcover windowposition={this.state.scroll} aboutposition={this.state.aboutPositionY} />
          <Landing />
          <div ref={this.selector} className="aboutposition"></div>
          <About />
          <Projects />
          <Contact />
      </div>
    );
  }
}

export default App;
