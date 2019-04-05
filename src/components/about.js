import React, { Component } from 'react';
import '../css/about.css';


export default class About extends Component {
    constructor(){
        super();
        this.state = {
            triangleOne: 'active',
            triangleTwo: 'inactive',
            triangleThree: 'inactive',
            triangleFour: 'inactive',
            triangleFive: 'inactive',
        }
    }

    activatetriangleOne = () => {
        this.setState({
            triangleOne: 'active',
            triangleTwo: 'inactive',
            triangleThree: 'inactive',
            triangleFour: 'inactive',
            triangleFive: 'inactive',
        })
    }
    activatetriangleTwo = () => {
        this.setState({
            triangleOne: 'inactive',
            triangleTwo: 'active',
            triangleThree: 'inactive',
            triangleFour: 'inactive',
            triangleFive: 'inactive',
        })
    }
    activatetriangleThree = () => {
        this.setState({
            triangleOne: 'inactive',
            triangleTwo: 'inactive',
            triangleThree: 'active',
            triangleFour: 'inactive',
            triangleFive: 'inactive',
        })
    }
    activatetriangleFour = () => {
        this.setState({
            triangleOne: 'inactive',
            triangleTwo: 'inactive',
            triangleThree: 'inactive',
            triangleFour: 'active',
            triangleFive: 'inactive',
        })
    }
    activatetriangleFive = () => {
        this.setState({
            triangleOne: 'inactive',
            triangleTwo: 'inactive',
            triangleThree: 'inactive',
            triangleFour: 'inactive',
            triangleFive: 'active',
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
                        <button onClick={() => this.activatetriangleOne()}>
                            <div id={
                                this.state.triangleOne === 'active' 
                                ? 'triangleactive'
                                : 'triangle'
                            }></div>
                        </button>
                        <div id={
                            this.state.triangleOne === 'inactive' 
                            ? 'timelinelengthactive'
                            : 'timelinelength'
                        }></div>
                        <button onClick={() => this.activatetriangleTwo()}>
                            <div id={
                            this.state.triangleTwo === 'active' 
                            ? 'triangleactive'
                            : 'triangle'
                            }></div>
                        </button>
                        <div id={
                            this.state.triangleTwo === 'inactive' && this.state.triangleOne === 'inactive'
                            ? 'timelinelengthactive'
                            : 'timelinelength'
                        }></div>
                        <button onClick={() => this.activatetriangleThree()}>
                            <div id={
                            this.state.triangleThree === 'active' 
                            ? 'triangleactive'
                            : 'triangle'
                            }></div>
                        </button>
                        <div id={
                            this.state.triangleFour === 'active' || this.state.triangleFive === 'active'
                            ? 'timelinelengthactive'
                            : 'timelinelength'
                        }></div>
                        <button onClick={() => this.activatetriangleFour()}>
                        <div id={
                            this.state.triangleFour === 'active' 
                            ? 'triangleactive'
                            : 'triangle'
                            }></div>
                        </button>
                        <div id={
                            this.state.triangleFive === 'active' 
                            ? 'timelinelengthactive'
                            : 'timelinelength'
                        }></div>
                        <button onClick={() => this.activatetriangleFive()}>
                            <div id={
                            this.state.triangleFive === 'active' 
                            ? 'triangleactive'
                            : 'triangle'
                            }></div>
                        </button>
                    </div>
                    <div className="timelineright">
                        There
                    </div>
                </div>
            </div>
        );
    }
}