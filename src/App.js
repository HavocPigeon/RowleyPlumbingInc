import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar.js';
import Landing from './components/landing.js';
import Contact from './components/contact.js';
import About from './components/about.js';
import Projects from './components/projects.js';
import Landingcover from './components/landingcover.js';
import ProjectsBg from './components/projectsbg.js';

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
    // const element = document.getElementById('test');
    // const rect = element.getBoundingClientRect();
    // console.log(rect.top);
    return (
      <div className="App">
      <div id="test"></div>
          <Navbar scrollposition={this.state.scroll}/>
          <Landingcover scrollposition={this.state.scroll} />
          <Landing />
          <About />
          {/* <ProjectsBg /> */}
          <Projects />
          <Contact />
      </div>
    );
  }
}

export default App;
