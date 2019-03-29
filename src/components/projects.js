import React from 'react';
import '../css/projects.css';
import Projectbox from './sub-components/projectbox.js';

const Projects = () => {
    return (
        <div className="projectsmain">
            <div id="projectanchor"></div>
            <div className="projecttitle">
                Past Projects
            </div>
            <div className="projecttitledescr">
                Check Out Some Of Our Past Projects Below
            </div>
            <div className="projectscontainer">
                <div className="projectboxblockone">
                    <Projectbox />
                    <Projectbox reversed={true}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;