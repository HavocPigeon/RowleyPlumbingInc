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

/* in safari: smooth scrolling, timeling circles */

class App extends Component {
  constructor(){
    super();
    this.state = {
      scroll: 0,
      bottomNavSticky: false,
      currentTime: 0,
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
    const today = new Date();
    const time = today.getHours();
    this.setState({
      currentTime: time,
    })
  }

  //scroll y position
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    this.setState({
        scroll: window.scrollY
    })
    const bottomNavLoc = document.getElementById("bottomnavbarcontainer");
    const stickyLoc = bottomNavLoc.offsetTop - 155
    if (this.state.scroll >= stickyLoc){
      this.setState({
        bottomNavSticky: true,
      })
    } else this.setState({
      bottomNavSticky: false,
    })
  }
  

  render() {
    console.log(this.state.currentTime);
    return (
      <div className="App">
          <Navbar scrollposition={this.state.scroll} />
          <Landingcover currentTime={this.state.currentTime}/>
          <Landing />
          <Bottomnavbar stickyNav={this.state.bottomNavSticky} scrollposition={this.state.scroll} />
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

