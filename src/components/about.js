import React, { Component } from 'react';
import '../css/about.css';


export default class About extends Component {
    constructor(){
        super();
        this.state = {
            circleOne: 'active',
            circleTwo: 'inactive',
            circleThree: 'inactive',
            circleFour: 'inactive',
            circleFive: 'inactive',
        }
    }

    activateCircleOne = () => {
        this.setState({
            circleOne: 'active',
            circleTwo: 'inactive',
            circleThree: 'inactive',
            circleFour: 'inactive',
            circleFive: 'inactive',
        })
    }
    activateCircleTwo = () => {
        this.setState({
            circleOne: 'inactive',
            circleTwo: 'active',
            circleThree: 'inactive',
            circleFour: 'inactive',
            circleFive: 'inactive',
        })
    }
    activateCircleThree = () => {
        this.setState({
            circleOne: 'inactive',
            circleTwo: 'inactive',
            circleThree: 'active',
            circleFour: 'inactive',
            circleFive: 'inactive',
        })
    }
    activateCircleFour = () => {
        this.setState({
            circleOne: 'inactive',
            circleTwo: 'inactive',
            circleThree: 'inactive',
            circleFour: 'active',
            circleFive: 'inactive',
        })
    }
    activateCircleFive = () => {
        this.setState({
            circleOne: 'inactive',
            circleTwo: 'inactive',
            circleThree: 'inactive',
            circleFour: 'inactive',
            circleFive: 'active',
        })
    }

    render() {
        console.log(this.state);
        return (
            <div className="aboutmain">
                <div id='about'></div>
                <div className="abouttitle">
                    About
                </div>
                <div className="abouttitledescr">
                    A Little Bit About Us
                </div>
                <div className="timelinecontainer">
                    <div className="timelineleft">
                        <button id={
                            this.state.circleOne === 'active' 
                            ? 'circleactive'
                            : 'circle'
                        } onClick={() => this.activateCircleOne()}></button>
                        <div id={
                            this.state.circleOne === 'inactive' 
                            ? 'timelinelengthactive'
                            : 'timelinelength'
                        }></div>
                        <button id={
                            this.state.circleTwo === 'active' 
                            ? 'circleactive'
                            : 'circle'
                        } onClick={() => this.activateCircleTwo()}></button>
                        <div id={
                            this.state.circleOne || this.state.circleTwo === 'active' 
                            ? 'timelinelength'
                            : 'timelinelengthactive'
                        }></div>
                        <button id={
                            this.state.circleThree === 'active' 
                            ? 'circleactive'
                            : 'circle'
                        } onClick={() => this.activateCircleThree()}></button>
                        <div id={
                            this.state.circleOne || this.state.circleTwo || this.state.circleThree === 'active' 
                            ? 'timelinelength'
                            : 'timelinelengthactive'
                        }></div>
                        <button id={
                            this.state.circleFour === 'active' 
                            ? 'circleactive'
                            : 'circle'
                        } onClick={() => this.activateCircleFour()}></button>
                        <div id={
                            this.state.circleFive === 'active' 
                            ? 'timelinelengthactive'
                            : 'timelinelength'
                        }></div>
                        <button id={
                            this.state.circleFive === 'active' 
                            ? 'circleactive'
                            : 'circle'
                        } onClick={() => this.activateCircleFive()}></button>
                    </div>
                    <div className="timelineright">
                        There
                    </div>
                </div>
            </div>
        );
    }
}