import React from 'react';
import '../css/about.css';
import Landingcovertwo from './landingcovertwo.js';

const About = () => {
    return (
        <div className="aboutmain">
            {/* <Landingcovertwo /> */}
            <div id='aboutanchor'></div>
            <div className="abouttitle">
                About
            </div>
            <div className="abouttitledescr">
                A Little Bit About Us
            </div>
        </div>
    );
};

export default About;