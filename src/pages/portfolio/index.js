import './index.scss';

const Portfolio = (props) =>{

    let data = props.works;

    return(
        <div id='portfolio' className="portfolio">
            <h2 id='portfolio'>PORTFOLIO</h2>
            <div className="content">
                <p>Voici les travaux que j'ai pu réaliser au cours de mon parcours :</p>
                <div className="works"> 
                    {data.map((project, index)=>{
                        return(
                            <div key={index + "project"} style={{backgroundImage: `url("data:image/png;base64,${project.image}")`}} className="work cd">
                                <div className='links'>
                                    <a href={project.githubLink} target="_blank">Github</a>
                                    <a href={project.websiteLink} target="_blank">Site</a>
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