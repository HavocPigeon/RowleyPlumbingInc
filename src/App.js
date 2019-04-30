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
      bottomNavSticky: false,
      currentTime: 0,
      activeSection: 0,
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
    
    //bottomNavOffset for bottomnav fixed pos
    const bottomNavLoc = document.getElementById("bottomnavbarcontainer");
    const stickyLoc = bottomNavLoc.offsetTop - 150
    //about.js offset for activenav
    const landingHeight = stickyLoc + 75;
    const aboutLoc = document.getElementById("aboutmain").offsetTop;
    const aboutLocDoc = aboutLoc + stickyLoc;
    //projects.js offset for activenav
    const projectsLoc = document.getElementById("projectsmain").offsetTop - 76;
    const projectsLocDoc = projectsLoc + landingHeight;
    //contact.js offset for activenav 
    const contactLoc = document.getElementById("contactmain").offsetTop - 75;
    const contactLocDoc = contactLoc + landingHeight;
    //if user scrolled to bottom
    const totalViewport = document.body.clientHeight - window.innerHeight; 
    const roundedScrollY = Math.floor(window.scrollY);
    const scrollYInt = Math.floor(this.state.scroll) 
    if (scrollYInt >= stickyLoc){
      this.setState({
        bottomNavSticky: true,
      })
    } else this.setState({
      bottomNavSticky: false,
    })


    if (scrollYInt < aboutLocDoc){
      this.setState({
        activeSection: 0,
      })
    } else if (scrollYInt >= aboutLocDoc && scrollYInt < projectsLocDoc){
      this.setState({
        activeSection: 1,
      })
    } else if (scrollYInt > aboutLocDoc && scrollYInt >= projectsLocDoc && totalViewport !== roundedScrollY){
      this.setState({
        activeSection: 2,
      }) 
    } else if (totalViewport === roundedScrollY){
      this.setState({
        activeSection: 3,
      })
    }
  }
  

  render() {
    return (
      <div className="App">
          <Navbar scrollposition={this.state.scroll} />
          <Landingcover currentTime={this.state.currentTime}/>
          <Landing />
          <Bottomnavbar stickyNav={this.state.bottomNavSticky} scrollposition={this.state.scroll} activeSection={this.state.activeSection} />
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

