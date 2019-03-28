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
            <div className={
                this.state.scroll <= 0
                ? "navbarmainh"
                : "navbarmainsh"
                 }>
                <div className={
                    this.state.scroll <= 0
                    ? 'logoh'
                    : 'logosh'    
                }><img className={
                    this.state.scroll <= 0
                    ? 'rowleylogo'
                    : 'rowleylogosmall'
                } src={Homelogo} alt="home-logo"/></div>
                <div className={
                    this.state.scroll <= 0
                    ? "abouth"
                    : "aboutsh"
                }>About</div>
                 <div className={
                     this.state.scroll <= 0
                    ? "projectsh"
                    : "projectssh"
                }>Projects</div>
                <div className={
                    this.state.scroll <= 0
                    ? "contacth"
                    : "contactsh"
                }>Contact</div>
            </div>
        );
    }
}