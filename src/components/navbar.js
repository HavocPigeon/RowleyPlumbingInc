import React, { Component } from 'react';
import '../css/navbar.css';
import Homelogo from '../Images/Final Logo.jpg';


export default class Navbar extends Component {
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
        console.log(this.state.scroll);
        return (
            <div className="navbarmainh">
                <div className="contacth">Contact</div>
                <div className="projectsh">Projects</div>
                <div className="abouth">About</div>
                <div className="logo"><img className='rowleylogo' src={Homelogo} alt="home-logo"/></div>
            </div>
        );
    }
}