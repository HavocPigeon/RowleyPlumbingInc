import React from 'react';
import '../css/navbar.css';
import Homelogo from '../Images/FInal Logo.png';

const Navbar = () => {
    return (
        <div className="navbarmain">
            <div className="logo"><img className='rowleylogo' src={Homelogo} alt="home-logo"/></div>
            <div className="about">About</div>
            <div className="projects">Projects</div>
            <div className="contact">Contact</div>
        </div>
    );
};

export default Navbar;