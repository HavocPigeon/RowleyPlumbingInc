import React, { Component } from 'react';
import '../css/projects.css';
import Projectbox from './sub-components/projectbox.js';
import Projectboxreverse from './sub-components/projectboxreverse.js';



export default class Projects extends Component {
    render() {
        const projects = [
            {
                name: 'EMERSON MILL AVENUE',
                address: '101 W 5th St Tempe, Az 85281',
                site: 'https://www.mark-taylor.com/apartments/az/tempe/emerson-mill-avenue/',
                image: 1,
            },
            {
                name: 'PHOENIX AIRPORT MARRIOTT',
                address: '1101 North 44th Street, Phoenix, Az 85008',
                site: 'https://www.marriott.com/hotels/travel/phxap-phoenix-airport-marriott/',
                image: 2,
            },
            {
                name: 'ESPLANADE PLACE',
                address: '2402 E. Esplanade Ln, Phoenix, Az 85016',
                site: 'https://eastvalleyurban.com/phoenix/esplanade-place/',
                image: 3,
            },
            {
                name: '2211 CAMELBACK',
                address: '2211 E Camelback Rd, Phoenix, AZ 85016',
                site: 'https://www.highrises.com/phoenix/residences-at-2211-camelback/',
                image: 4,
            },
            {
                name: 'BRIDGEVIEW AT HAYDEN FERRY',
                address: '140 E. Rio Salado Pkwy, Tempe, Az 85281',
                site: 'https://eastvalleyurban.com/tempe/bridgeview/',
                image: 5,
            },
            {
                name: 'HOHOKAM STADIUM',
                address: '1235 N. Center Street Mesa, Az 85201',
                site: 'https://www.mlb.com/athletics/spring-training/ballpark',
                image: 6,
            },
            {
                name: 'RESIDENCE INN FLAGSTAFF',
                address: '100 North Humphreys Street Flagstaff, Az 86001',
                site: 'https://www.marriott.com/hotels/travel/flgrf-residence-inn-flagstaff/',
                image: 7,
            },
            {
                name: 'COURTYARD SEDONA',
                address: '4105 West State Route 89A Sedona, Az 86336',
                site: 'https://www.marriott.com/hotels/travel/flgcs-courtyard-sedona/',
                image: 8,
            },
            {
                name: 'STAYBRIDGE SUITS GILBERT',
                address: '5275 E. Baseline Road Gilbert, Az 85234',
                site: 'https://www.ihg.com/staybridge/hotels/us/en/gilbert/phxgl/hoteldetail',
                image: 9,
            },
            {
                name: 'HYATT PLACE RIVERVIEW',
                address: '1422 West Bass Pro Drive Mesa, Az 85201',
                site: 'https://www.hyatt.com/en-US/hotel/arizona/hyatt-place-phoenix-mesa/phxzm',
                image: 10,
            },
            {
                name: 'FAIRFIELD INN AND SUITES',
                address: '2222 South Priest Drive Tempe, Az 85282',
                site: 'https://www.marriott.com/hotels/maps/travel/phxmp-fairfield-inn-and-suites-phoenix-tempe-airport/',
                image: 11,
            },
            {
                name: 'HOME2 SUITES BY HILTON',
                address: '6620 N. 95th Avenue Glendale, Az 85305',
                site: 'https://home2suites3.hilton.com/en/hotels/arizona/home2-suites-by-hilton-phoenix-glendale-westgate-PHXGWHT/index.html',
                image: 12,
            },
        ]

        return (
            <div id="projectsmain">
            <div id="projects"></div>
            <div className="projecttitle">
                PAST PROJECTS
            </div>
            <div className="projecttitledescr">
                SOME OF OUR PAST WORK
            </div>
            <div className="projectscontainer">
                <div className="projectboxblockone">
                    <Projectbox projectName={projects[0].name} projectAddress={projects[0].address} projectSite={projects[0].site} projectImage={projects[0].image} />
                    <Projectboxreverse projectName={projects[1].name} projectAddress={projects[1].address} projectSite={projects[1].site} projectImage={projects[1].image} />
                </div>
                <div className="projectboxblocktwo">
                    <Projectbox projectName={projects[2].name} projectAddress={projects[2].address}  projectSite={projects[2].site} projectImage={projects[2].image} />
                    <Projectboxreverse projectName={projects[3].name} projectAddress={projects[3].address} projectSite={projects[3].site} projectImage={projects[3].image} />
                </div>
                <div className="projectboxblockthree">
                    <Projectbox projectName={projects[4].name} projectAddress={projects[4].address} projectSite={projects[4].site} projectImage={projects[4].image} />
                    <Projectboxreverse projectName={projects[5].name} 
                    projectAddress={projects[5].address} projectSite={projects[5].site} projectImage={projects[5].image} />
                </div>
                <div className="projectboxblockfour">
                    <Projectbox projectName={projects[6].name} projectAddress={projects[6].address} projectSite={projects[6].site} projectImage={projects[6].image} />
                    <Projectboxreverse projectName={projects[7].name} 
                    projectAddress={projects[7].address} projectSite={projects[7].site} projectImage={projects[7].image} />
                </div>
                <div className="projectboxblockfive">
                    <Projectbox projectName={projects[8].name} 
                    projectAddress={projects[8].address} projectSite={projects[8].site} projectImage={projects[8].image} />
                    <Projectboxreverse projectName={projects[9].name} projectAddress={projects[9].address} projectSite={projects[9].site} projectImage={projects[9].image} />
                </div>
                <div className="projectboxblocksix">
                    <Projectbox projectName={projects[10].name} 
                    projectAddress={projects[10].address} projectSite={projects[10].site} projectImage={projects[10].image} />
                    <Projectboxreverse projectName={projects[11].name} 
                    projectAddress={projects[11].address} projectSite={projects[11].site} projectImage={projects[11].image} />
                </div>
            </div>
        </div>
        );
    }
}