import React, { Component } from 'react';
import '../css/landingcover.css';


export default class Landingcover extends Component {
    render() {
        return (
            <div className={this.props.aboutposition < this.props.windowposition 
            ? 'landingcovermain'
            : 'landingcovermainv2'}>
            </div>
        );
    }
}