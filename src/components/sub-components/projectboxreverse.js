import React, { Component } from 'react';
import '../../css/sub-components/projectbox.css';


export default class Projectboxreverse extends Component {
    render() {
        return (
            <div className="projectboxreversemain">
                <div className="projectimage">
                    {this.props.projectimage}
                </div>
                <div className="projectname">
                    {this.props.projectName}
                </div>
                <div className="projectsite">
                    <a href={this.props.projectSite}></a>
                </div>
            </div>
        );
    }
}