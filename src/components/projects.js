import React, { Component } from 'react';
import '../css/projects.css';
import Projectbox from './sub-components/projectbox.js';
import Projectboxreverse from './sub-components/projectboxreverse.js';


export default class Projects extends Component {
    render() {
        const projects = [
            {
                name: 'Emerson Mill Avenue',
                site: 'https://www.mark-taylor.com/apartments/az/tempe/emerson-mill-avenue/',
                image: '',
                text: '',
            },
            {
                name: 'Phoenix Airport Mariott',
                site: 'https://www.marriott.com/hotels/travel/phxap-phoenix-airport-marriott/',
                image: '',
                text: '', 
            }
        ]

        return (
            <div className="projectsmain">
            <div id="projectanchor"></div>
            <div className="projecttitle">
                Past Projects
            </div>
            <div className="projecttitledescr">
                Check Out Some Of Our Past Projects
            </div>
            <div className="projectscontainer">
                <div className="projectboxblockone">
                    <Projectbox projectName={projects[0].name} projectSite={projects[0].site} projectImage={projects[0].image} />
                    <Projectboxreverse projectName={projects[1].name} projectSite={projects[1].site} projectImage={projects[1].image} />
                </div>
                <div className="projectboxblocktwo">
                    <Projectbox />
                    <Projectboxreverse />
                </div>
                <div className="projectboxblockthree">
                    <Projectbox />
                    <Projectboxreverse />
                </div>
                <div className="projectboxblockfour">
                    <Projectbox />
                    <Projectboxreverse />
                </div>
                <div className="projectboxblockfive">
                    <Projectbox />
                    <Projectboxreverse />
                </div>
                <div className="projectboxblocksix">
                    <Projectbox />
                    <Projectboxreverse />
                </div>
            </div>
        </div>
        );
    }
}