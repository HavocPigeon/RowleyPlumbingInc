import React, { Component } from 'react';
import '../css/landingcovers.css';


export default class  extends Component {
    render() {
        return (
            <div className={
                this.props.currentTime >= 6 && this.props.currentTime <= 16
                ? 'landingcovermain'
                : this.props.currentTime >= 17 && this.props.currentTime <= 18 
                ? 'landingcovermainsunset'
                : 'landingcovermainnight'
            }></div>
        );
    }
}