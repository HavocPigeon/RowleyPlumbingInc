import React, { Component } from 'react';
import '../../css/sub-components/projectbox.css';
import imageOne from '../../Images/Project Images/Home2 Suites.jpg';
import imageThree from '../../Images/Project Images/2211 Camelback.jpg';
import imageFive from '../../Images/Project Images/Hohokam Stadium.jpg';
import imageSeven from '../../Images/Project Images/Courtyard Sedona.jpg';
import imageNine from '../../Images/Project Images/Hyatt Place Riverview.jpg';
import imageEleven from '../../Images/Project Images/Emerson Mill Avenue.jpg';
import imageThirteen from '../../Images/Project Images/HIE North Phoenix.jpg';
import imageFifteen from '../../Images/Project Images/Residence Inn La Quinta.jpg';


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
                <div className="projectsite">
                    <a href={this.props.projectSite} target='_blank' rel="noopener noreferrer">
                    <img className='projectimage' src={
                        this.props.projectImage === 1
                        ? imageOne 
                        : this.props.projectImage === 3
                        ? imageThree
                        : this.props.projectImage === 5
                        ? imageFive
                        : this.props.projectImage === 7
                        ? imageSeven
                        : this.props.projectImage === 9
                        ? imageNine
                        : this.props.projectImage === 11
                        ? imageEleven
                        : this.props.projectImage === 13
                        ? imageThirteen
                        : this.props.projectImage === 15
                        ? imageFifteen : imageOne
                    } alt="projectthumbnail"/>
                    </a>
                </div>
            </div>
        );
    }
}