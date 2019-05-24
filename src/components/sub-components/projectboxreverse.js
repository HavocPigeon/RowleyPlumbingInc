import React, { Component } from 'react';
import '../../css/sub-components/projectbox.css';
import imageTwo from '../../Images/Project Images/Esplanade Place.jpg';
import imageFour from '../../Images/Project Images/2211 Camelback.jpg';
import imageSix from '../../Images/Project Images/Hohokam Stadium.jpg';
import imageEight from '../../Images/Project Images/Courtyard Sedona.jpg';
import imageTen from '../../Images/Project Images/Hyatt Place Riverview.jpg';
import imageTwelve from '../../Images/Project Images/Emerson Mill Avenue.jpg';

export default class Projectboxreverse extends Component {
    render() {
        return (
            <div className="projectboxreversemain">
                <div className="projectsite">
                    <a href={this.props.projectSite} target='_blank' rel="noopener noreferrer">
                    <img className='projectimage' src={
                        this.props.projectImage === 2
                        ? imageTwo 
                        : this.props.projectImage === 4
                        ? imageFour
                        : this.props.projectImage === 6
                        ? imageSix
                        : this.props.projectImage === 8
                        ? imageEight
                        : this.props.projectImage === 10
                        ? imageTen
                        : this.props.projectImage === 12
                        ? imageTwelve : imageTwo
                    } alt="projectthumbnail"/>
                    </a>
                <div className="projectname">
                    {this.props.projectName}
                </div>
                <div className="projectaddress">
                    {this.props.projectAddress}
                </div>
                </div>
            </div>
        );
    }
}