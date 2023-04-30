import { sitecd } from '../../assets/img';
import { useState } from 'react';
import './index.scss';
import { useEffect } from 'react';

const Portfolio = () =>{

    let siteCd = require('../../assets/img/sitecd.png')

    const projects = [
        {
            style:{
                backgroundImage: `url("${siteCd}")`,
            },
            github: "",
            link:"https://www.cdmatthieu.online"
        },
        {
            style:{
                backgroundImage: `url(${siteCd})`,
            },
            github: "",
            link:"https://www.cdmatthieu.online"
        },
        {
            style:{
                backgroundImage: `url(${siteCd})`,
            },
            github: "",
            link:"https://www.cdmatthieu.online"
        },
        {
            style:{
                backgroundImage: `url(${siteCd})`,
            },
            github: "",
            link:"https://www.cdmatthieu.online"
        }
    ]


    return(
        <div id='portfolio' className="portfolio">
            <h2 id='portfolio'>PORTFOLIO</h2>
            <div className="content">
                <p>Voici les travaux que j'ai pu réaliser au cours de mon parcours :</p>
                <div className="works"> 
                    {projects.map((project, index)=>{
                        return(
                            <div style={project.style} className="work cd">
                                <div className='links'>
                                    <a href={project.github}>Github</a>
                                    <a href={project.link} target="_blank">Site</a>
                                </div>               
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    )
}

export default Portfolio;