import React, { Component } from 'react';
import '../../css/sub-components/projectbox.css';


export default class Projectbox extends Component {
    render() {
        return (
            <div className="projectboxmain">
                <div className="projectname">
                    {this.props.projectName}
                </div>
                <div className="projectaddress">
                    {this.props.projectAddress}
                </div>
                <div className="projectimage">
                    {this.props.productImage}
                </div>
                <div className="projectsite">
                    <a href={this.props.projectSite} target='_blank' rel="noopener noreferrer">Site</a>
                </div>
            </div>
        );
    }
}