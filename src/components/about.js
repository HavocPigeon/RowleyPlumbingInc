import React from 'react';
import '../css/about.css';

const About = () => {
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
                    <span id='circle'></span>
                    <div id="lengthone"></div>
                    <span id='circle'></span>
                    <div id="lengthtwo"></div>
                    <span id='circle'></span>
                    <div id="lengththree"></div>
                    <span id='circle'></span>
                    <div id="lengthfour"></div>
                    <span id='circle'></span>
                </div>
                <div className="timelineright">
                    There
                </div>
            </div>
        </div>
    );
};

export default About;