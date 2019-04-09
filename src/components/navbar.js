import React, { Component } from 'react';
import '../css/navbar.css';
import Homelogo from '../Images/Final Logo.png';
import Hiddenmenubutton from '../Images/Icons/Hiddenmenubutton.png';

export default class Navbar extends Component {
    constructor(){
        super();
        this.state = {
            hiddenmenu: false,
        }
    }

    scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        this.setState({
            hiddenmenu: false,
        })
    }
    openHiddenMenu = () => {
        this.setState({
            hiddenmenu: !this.state.hiddenmenu,
        })
    }

    render() {
        return (
            <div className={
                this.props.scrollposition <= 0
                ? "navbarmainh"
                : "navbarmainsh"
                 }>
                <div className={
                    this.props.scrollposition <= 0
                    ? 'logoh'
                    : 'logosh'    
                }><img onClick={
                    () => this.scrollToTop()
                } className={
                    this.props.scrollposition <= 0
                    ? 'rowleylogo'
                    : 'rowleylogosmall'
                } src={Homelogo} alt="home-logo"/></div>
                <a href="#about" className={
                    this.props.scrollposition <= 0
                    ? "abouth"
                    : "aboutsh"
                }>About</a>
                 <a href="#projects" className={
                     this.props.scrollposition <= 0
                    ? "projectsh"
                    : "projectssh"
                }>Projects</a>
                <a href="#contact" className={
                    this.props.scrollposition <= 0
                    ? "contacth"
                    : "contactsh"
                }>Contact</a>
                <div className={
                    this.props.scrollposition <= 0 
                    ? "hiddenmenubuttonh"
                    : "hiddenmenubuttonsh"
                }>
                    <button onClick={() => {
                        this.openHiddenMenu();
                    }}>
                        <img className='hiddenmenuimage' src={Hiddenmenubutton} alt="hiddenmenubutton"/>
                    </button>
                </div>

                <div className={
                    this.state.hiddenmenu === true && this.props.scrollposition > 0
                    ? 'hiddennavbar'
                    : 'hiddennavbarh'
                }>
                    <a href="#about" className={
                        this.state.hiddenmenu === true && this.props.scrollposition > 0
                        ? 'abouthiddenmenu'
                        : 'abouthiddenmenuh'
                    }>About</a>
                    <a href="#projects"  className={
                        this.state.hiddenmenu === true && this.props.scrollposition > 0
                        ? 'projecthiddenmenu'
                        : 'projecthiddenmenuh'
                    }>Projects</a>
                    <a href="#contact"  className={
                        this.state.hiddenmenu === true && this.props.scrollposition > 0
                        ? 'contacthiddenmenu'
                        : 'contacthiddenmenuh'
                    }>Contact</a>
                    
                </div>

            </div>
        );
    }
}
