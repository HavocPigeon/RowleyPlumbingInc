import React, { Component } from 'react';
import '../css/navbar.css';
import Homelogo from '../Images/Final Logo.png';


export default class Navbar extends Component {

    scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
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
                    () => this.scrollpositionToTop()
                } className={
                    this.props.scrollposition <= 0
                    ? 'rowleylogo'
                    : 'rowleylogosmall'
                } src={Homelogo} alt="home-logo"/></div>
                <a href="#aboutanchor" className={
                    this.props.scrollposition <= 0
                    ? "abouth"
                    : "aboutsh"
                }>About</a>
                 <a href="#projectanchor" className={
                     this.props.scrollposition <= 0
                    ? "projectsh"
                    : "projectssh"
                }>Projects</a>
                <a href="#contactanchor" className={
                    this.props.scrollposition <= 0
                    ? "contacth"
                    : "contactsh"
                }>Contact</a>
            </div>
        );
    }
}
