import React from 'react';
import '../css/contact.css';
import rowleyOuthouse from '../Images/Rowley outhouse.png';

const Contact = () => {
    return (
        <div id="contactmain">
            <div id="contact"></div>
            <div className="contactbox">
                <div className="outhouse">
                    <img className='rowleyouthouse' src={rowleyOuthouse} alt="outhouse-logo"/>
                </div>
                <div className="contacttitle">
                    CONTACT US
                </div>
                <div className="contactinfo">
                    <p>
                        480-834-5152
                    </p>
                </div>
                <div className="indvcontacts">
                    <div className="contactinfow">
                        <p className='contactnames'>
                            Wayne Spencer: 
                        </p>
                        <p className='emails'>
                             wayne_rpi@msn.com
                        </p>
                    </div>
                    <div className="contactinfoc">
                        <p className='contactnames'>
                            Clint Rowley: 
                        </p>
                        <p className='emails'>
                            clint_rpi@msn.com
                        </p>
                    </div>
                </div>
            </div>
            <div className="createdby">
                Created By Easton Spencer © 2019
            </div>
        </div>
    );
};

export default Contact;