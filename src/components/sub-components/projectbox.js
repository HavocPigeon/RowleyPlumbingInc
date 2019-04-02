import React, { Component } from 'react';
import '../../css/sub-components/projectbox.css';



export default class Projectbox extends Component {
    render() {
        console.log(this.props.projectImage);
        return (
            <div className="projectboxmain">
                <div className="projectname">
                    {this.props.projectName}
                </div>
                <div className="projectaddress">
                    {this.props.projectAddress}
                </div>
                <img className='projectimage' src={require(this.props.projectImage)} alt="projectthumbnail"/>
                <div className="projectsite">
                    <a href={this.props.projectSite} target='_blank' rel="noopener noreferrer">Site</a>
                </div>
            </div>
        );
    }
}