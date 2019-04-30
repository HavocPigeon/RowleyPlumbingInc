import React, { Component } from 'react';
import '../css/bottomnavbar.css';

export default class Bottomnavbar extends Component {
    
    render() {
        return (
            <div id='bottomnavbarcontainer'>
                <div className={
                    this.props.stickyNav === false 
                    ? 'bottomnavbarmain'
                    : 'bottomnavbarmainsticky'
                }>
                    <a href="#about">
                        <div className={
                            this.props.activeSection === 1 
                            ? 'abouttagactive'
                            : 'abouttag'
                        }>
                            ABOUT
                        </div>
                    </a>
                    <a href="#projects">
                        <div className={
                            this.props.activeSection === 2 
                            ? 'projectstagactive'
                            : 'projectstag'
                        }>
                            PROJECTS
                        </div>
                    </a>
                    <a href="#contact">
                        <div className={
                            this.props.activeSection === 3 
                            ? 'contacttagactive'
                            : 'contacttag'
                        }>
                            CONTACT
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