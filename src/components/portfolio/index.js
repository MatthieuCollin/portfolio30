import { frontMentor, siteKaraoke, sitecd, portfolio, ancienSite } from '../../assets/img';
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
            github: "https://github.com/MatthieuCollin/cd-site",
            link:"https://www.cdmatthieu.online"
        },
        {
            style:{
                backgroundImage: `url(${siteKaraoke})`,
            },
            github: "https://github.com/MatthieuCollin/karaoke",
            link:""
        },
        {
            style:{
                backgroundImage: `url(${frontMentor})`,
            },
            github: "https://github.com/MatthieuCollin/Frontmentor-Dashboard",
            link:"https://www.cdmatthieu.online"
        },
        {
            style:{
                backgroundImage: `url(${portfolio})`,
            },
            github: "https://github.com/MatthieuCollin/portfolio30",
            link:""
        },
        {
            style:{
                backgroundImage: `url(${ancienSite})`,
            },
            github: "https://github.com/MatthieuCollin/portfolio20",
            link:"https://www.devwebcollin.fr"
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
                                    <a href={project.github} target="_blank">Github</a>
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