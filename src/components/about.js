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
        setTimeout(() => {
            // this.activateCircleTwo();
        }, 10000);
    }
    activateCircleTwo = () => {
        this.setState({
            circleOne: 'inactive',
            circleTwo: 'active',
            circleThree: 'inactive',
            circleFour: 'inactive',
            circleFive: 'inactive',
        })
        setTimeout(() => {
            // this.activateCircleThree();
        }, 10000);
    }
    activateCircleThree = () => {
        this.setState({
            circleOne: 'inactive',
            circleTwo: 'inactive',
            circleThree: 'active',
            circleFour: 'inactive',
            circleFive: 'inactive',
        })
        setTimeout(() => {
            // this.activateCircleFour();
        }, 10000);
    }
    activateCircleFour = () => {
        this.setState({
            circleOne: 'inactive',
            circleTwo: 'inactive',
            circleThree: 'inactive',
            circleFour: 'active',
            circleFive: 'inactive',
        })
        setTimeout(() => {
            // this.activateCircleFive();
        }, 10000);
    }
    activateCircleFive = () => {
        this.setState({
            circleOne: 'inactive',
            circleTwo: 'inactive',
            circleThree: 'inactive',
            circleFour: 'inactive',
            circleFive: 'active',
        })
        setTimeout(() => {
            // this.activateCircleOne();
        }, 10000);
    }
    
    componentDidMount = () => {
        setTimeout(() => {  
            this.findNextActiveCircle();
        }, 10000);
    }
    findNextActiveCircle = () => {
        const currentActive = Object.keys(this.state).find(key => this.state[key] === 'active').match(/[A-Z][a-z]+/g)[0]

        if (currentActive === "One"){
            this.activateCircleTwo();
        } else if (currentActive === 'Two'){
            this.activateCircleThree();
        } else if  (currentActive === 'Three'){
            this.activateCircleFour();
        } else if (currentActive === 'Four'){
            this.activateCircleFive();
        } else if (currentActive === 'Five'){
            this.activateCircleOne();
        } else this.activateCircleOne();
        setTimeout(() => {
            this.findNextActiveCircle();
        }, 10000);

    }

    render() {
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
                        <button onClick={() => this.activateCircleOne()}>
                            <div id={
                                this.state.circleOne === 'active' 
                                ? 'circleactive'
                                : 'circle'
                            }></div>
                        </button>
                        <div id={
                            this.state.circleOne === 'inactive' 
                            ? 'timelinelengthactive'
                            : 'timelinelength'
                        }></div>
                        <button onClick={() => this.activateCircleTwo()}>
                            <div id={
                            this.state.circleTwo === 'active' 
                            ? 'circleactive'
                            : 'circle'
                            }></div>
                        </button>
                        <div id={
                            this.state.circleTwo === 'inactive' && this.state.circleOne === 'inactive'
                            ? 'timelinelengthactive'
                            : 'timelinelength'
                        }></div>
                        <button onClick={() => this.activateCircleThree()}>
                            <div id={
                            this.state.circleThree === 'active' 
                            ? 'circleactive'
                            : 'circle'
                            }></div>
                        </button>
                        <div id={
                            this.state.circleFour === 'active' || this.state.circleFive === 'active'
                            ? 'timelinelengthactive'
                            : 'timelinelength'
                        }></div>
                        <button onClick={() => this.activateCircleFour()}>
                        <div id={
                            this.state.circleFour === 'active' 
                            ? 'circleactive'
                            : 'circle'
                            }></div>
                        </button>
                        <div id={
                            this.state.circleFive === 'active' 
                            ? 'timelinelengthactive'
                            : 'timelinelength'
                        }></div>
                        <button onClick={() => this.activateCircleFive()}>
                            <div id={
                            this.state.circleFive === 'active' 
                            ? 'circleactive'
                            : 'circle'
                            }></div>
                        </button>
                    </div>

                    <div className="timelineright">
                        <p className={
                            this.state.circleOne === 'active' 
                            ? 'abouttextshown'
                            : 'abouttexthidden'
                        }>1</p>
                        <p className={
                            this.state.circleTwo === 'active' 
                            ? 'abouttextshown'
                            : 'abouttexthidden'
                        }>2</p>
                        <p className={
                            this.state.circleThree === 'active' 
                            ? 'abouttextshown'
                            : 'abouttexthidden'
                        }>3</p>
                        <p className={
                            this.state.circleFour === 'active' 
                            ? 'abouttextshown'
                            : 'abouttexthidden'
                        }>4</p>
                        <p className={
                            this.state.circleFive === 'active' 
                            ? 'abouttextshown'
                            : 'abouttexthidden'
                        }>5</p>
                    </div>
                    
                </div>
            </div>
        );
    }
}