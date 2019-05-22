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
            <div id="aboutmain">
                <div id='about'></div>
                <div className="abouttitle">
                    ABOUT
                </div>
                <div className="abouttitledescr">
                    A LITTLE BIT ABOUT US
                </div>
                <div className="timelinecontainer">
                    <div className="timelineleft">
                            <p className={
                                this.state.circleOne === 'active' 
                                ? 'abouttextshown'
                                : 'abouttexthidden'
                            }>Rowley Plumbing was established in 1973 by Ken Rowley. He inherited all of the early contracts and equipment from his former employer E.T. Maynard.</p>
                            <p className={
                                this.state.circleThree === 'active' 
                                ? 'abouttextshown'
                                : 'abouttexthidden'
                            }>Since those days, Rowley plumbing has taken on projects of all kinds throughout the Phoenix valley including ASU dorms, high-rise condos, hotels, large department stores, and even a baseball stadium.</p>
                            <p className={
                                this.state.circleFive === 'active' 
                                ? 'abouttextshown'
                                : 'abouttexthidden'
                            }>As of today, Rowley Plumbing has completed over 250 major projects. The most recent of which is the Staybridge Suites in Gilbert, Arizona. 
                            </p>
                        </div>
                    <div className="timelinecircles">

                        <div onClick={() => {
                            this.activateCircleOne()
                            this.resetTimeoutFunction()
                            }} id={
                                    this.state.circleOne === 'active' 
                                    ? 'circleactive'
                                    : 'circle'
                                }>
                        </div>
                        <div id={
                            this.state.circleOne === 'inactive' 
                            ? 'timelinelengthactive'
                            : 'timelinelength'
                        }></div>

                        <div onClick={() => {
                            this.activateCircleTwo()
                            this.resetTimeoutFunction()
                            }} id={
                                this.state.circleTwo === 'active' 
                                ? 'circleactive'
                                : 'circle'
                                }>
                        </div>
                        <div id={
                            this.state.circleTwo === 'inactive' && this.state.circleOne === 'inactive'
                            ? 'timelinelengthactive'
                            : 'timelinelength'
                        }></div>

                        <div onClick={() => {
                            this.activateCircleThree()
                            this.resetTimeoutFunction()
                            }} id={
                                this.state.circleThree === 'active' 
                                ? 'circleactive'
                                : 'circle'
                                }>
                        </div>
                        <div id={
                            this.state.circleFour === 'active' || this.state.circleFive === 'active'
                            ? 'timelinelengthactive'
                            : 'timelinelength'
                        }></div>

                        <div onClick={() => {
                            this.activateCircleFour()
                            this.resetTimeoutFunction()
                            }} id={
                                this.state.circleFour === 'active' 
                                ? 'circleactive'
                                : 'circle'
                                }>
                            </div>
                        <div id={
                            this.state.circleFive === 'active' 
                            ? 'timelinelengthactive'
                            : 'timelinelength'
                        }></div>

                        <div onClick={() => {
                            this.activateCircleFive()
                            this.resetTimeoutFunction()
                            }} id={
                                this.state.circleFive === 'active' 
                                ? 'circleactive'
                                : 'circle'
                                }>
                        </div>
                    </div>


                    <div className="timelineright">
                        <p className={
                            this.state.circleTwo === 'active' 
                            ? 'abouttextshown extratop'
                            : 'abouttexthidden extratop'
                        }>The early days of the company included a variety of different types of projects including banks, grocery stores, medical and rehab offices, numerous apartment projects, a high school, and a junior high.</p>
                        <p className={
                            this.state.circleFour === 'active' 
                            ? 'abouttextshown extrabottom'
                            : 'abouttexthidden extrabottom'
                        }>In 2017 Ken Rowley's son Clint and son-in-law Wayne, who were both long-time employees of the company, took over ownership and began running operations.
                        </p>
                    </div>
                    
                </div>
                
            </div>
        );
    }
}