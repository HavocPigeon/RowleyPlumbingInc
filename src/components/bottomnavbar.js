import React, { Component } from 'react';
import '../css/bottomnavbar.css';

export default class Bottomnavbar extends Component {
    touchStart = () => {
        console.log('hello');
    }
    render() {
        return (
            <div id='bottomnavbarcontainer'>
                <div className={
                    this.props.stickyNav === false 
                    ? 'bottomnavbarmain'
                    : 'bottomnavbarmainsticky'
                }>
                    <a href="#about">
                        <div className="abouttag">
                            About
                        </div>
                    </a>
                    <a href="#projects">
                        <div className="projectstag">
                            Projects
                        </div>
                    </a>
                    <a href="#contact">
                        <div className="contacttag">
                            Contact
                        </div>
                    </a>
                    <div className={
                    this.props.stickyNav === false
                    ? 'transitionnavbarhidden'
                    : 'transitionnavbar'
                }></div>
                </div>
            </div>
        );
    }
}