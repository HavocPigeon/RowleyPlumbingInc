import React, { Component } from 'react';
import '../css/navbar.css';
import Homelogo from '../Images/Final Logo.png';

export default class Navbar extends Component {

    scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        this.setState({
            hiddenmenu: false,
        })
    }

    render() {
        return (
            <div onClick={
                () => this.scrollToTop()
            } className={
                this.props.scrollposition <= 0
                ? "navbarmainh"
                : "navbarmainsh"
                 }>
                <div className={
                    this.props.scrollposition <= 0
                    ? 'logoh'
                    : 'logosh'    
                }><img className={
                    this.props.scrollposition <= 0
                    ? 'rowleylogo'
                    : 'rowleylogosmall'
                } src={Homelogo} alt="home-logo"/></div>
            </div>
        );
    }
}
