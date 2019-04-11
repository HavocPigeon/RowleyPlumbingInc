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
    
    componentDidMount = () => {
        this.timeoutFunction();
    }


    resetTimeoutFunction = () => {
        clearTimeout(this.timer);
        this.timeoutFunction();
    }

    timeoutFunction = () => {
        this.timer = 
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
        
        this.timeoutFunction();

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
                        <button onClick={() => {
                        this.activateCircleOne()
                        this.resetTimeoutFunction()
                        }}>
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
                        <button onClick={() => {
                        this.activateCircleTwo()
                        this.resetTimeoutFunction()
                        }}>
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
                        <button onClick={() => {
                        this.activateCircleThree()
                        this.resetTimeoutFunction()
                        }}>
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
                        <button onClick={() => {
                        this.activateCircleFour()
                        this.resetTimeoutFunction()
                        }}>
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
                        <button onClick={() => {
                        this.activateCircleFive()
                        this.resetTimeoutFunction()
                        }}>
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
                        }>Rowley Plumbing was established in 1973 by Ken Rowley. He inherited all of the early contracts and equipment from his former employer E.T. Maynard learned that he was dying of cancer.</p>
                        <p className={
                            this.state.circleTwo === 'active' 
                            ? 'abouttextshown'
                            : 'abouttexthidden'
                        }>The early days of the company included doing a variety of different types of jobs including banks, grocery stores, medical and rehab offices, several high schools, and even a few single family homes. It was during these years that the company found a preference for commercial projects.</p>
                        <p className={
                            this.state.circleThree === 'active' 
                            ? 'abouttextshown'
                            : 'abouttexthidden'
                        }>Since those days, Rowley plumbing has taken on projects of all kinds throughout the Phoenix valley including a college, ASU dorms, high-rise condos, hotels, large department stores, and even a baseball stadium.</p>
                        <p className={
                            this.state.circleFour === 'active' 
                            ? 'abouttextshown'
                            : 'abouttexthidden'
                        }>In 2010 Ken Rowley's son Clint and son-in-law Wayne took over ownership and began running the company.
                        </p>
                        <p className={
                            this.state.circleFive === 'active' 
                            ? 'abouttextshown'
                            : 'abouttexthidden'
                        }>As of today, Rowley Plumbing has completed over 250 major projects. The most recent job of which is the Home2 Suites hotel located in Gilbert, Arizona. 
                        </p>
                    </div>
                    
                </div>
            </div>
        );
    }
}