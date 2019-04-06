import React, { Component } from 'react';
import '../css/bottomnavbar.css';

export default class Bottomnavbar extends Component {
    render() {
        return (
            <div className={
                this.props.scrollposition <= 0 
                ? 'bottomnavbarmain'
                : 'bottomnavbarhidden'
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
            </div>
        );
    }
}