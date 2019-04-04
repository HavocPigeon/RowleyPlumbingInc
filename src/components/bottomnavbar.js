import React, { Component } from 'react';
import '../css/bottomnavbar.css';
import singleArrow from '../Images/Icons/Single Arrow.png';
import doubleArrow from '../Images/Icons/Double Arrow.png';
import tripleArrow from '../Images/Icons/Triple Arrow.png';

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
                    <img className='icons' src={singleArrow} alt="aboutarrow"/>
                </a>
                <a href="#projects">
                    <div className="projectstag">
                        Projects
                    </div>
                    <img className='icons' src={doubleArrow} alt="projectarrow"/>
                </a>
                <a href="#contact">
                    <div className="contacttag">
                        Contact
                    </div>
                    <img className='icons' src={tripleArrow} alt="contactarrow"/>
                </a>
            </div>
        );
    }
}