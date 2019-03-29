import React from 'react';
import '../css/contact.css';

const Contact = () => {
    return (
        <div className="contactmain">
            <div id="contactanchor"></div>
            <div className="contactbox">
                <div className="contacttitle">
                    Contact Us
                </div>
                <div className="contactinfo">
                    <p>
                        480-834-5152
                    </p>
                </div>
                <div className="indvcontacts">
                    <div className="contactinfow">
                        <p>
                            Wayne Spencer:  wayne_rpi@msn.com
                        </p>
                    </div>
                    <div className="contactinfoc">
                        <p>
                            Clint Rowley:
                            clint_rpi@msn.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;