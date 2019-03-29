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
    scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
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
                }><img onClick={
                    () => this.scrollToTop()
                } className={
                    this.state.scroll <= 0
                    ? 'rowleylogo'
                    : 'rowleylogosmall'
                } src={Homelogo} alt="home-logo"/></div>
                <a href="#aboutanchor" className={
                    this.state.scroll <= 0
                    ? "abouth"
                    : "aboutsh"
                }>About</a>
                 <a href="#projectanchor" className={
                     this.state.scroll <= 0
                    ? "projectsh"
                    : "projectssh"
                }>Projects</a>
                <a href="#contactanchor" className={
                    this.state.scroll <= 0
                    ? "contacth"
                    : "contactsh"
                }>Contact</a>
            </div>
        );
    }
}