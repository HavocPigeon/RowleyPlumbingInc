import React, { Component } from 'react';
import '../css/landingcover.css';


export default class Landingcover extends Component {
    render() {
        return (
            <div className={
                this.props.scrollposition <= 0
                ? 'landingcovermain'
                : 'landingcovermainv2'
            }></div>
        );
    }
}