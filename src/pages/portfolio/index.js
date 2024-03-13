import Project from '../../components/project';
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
                            <Project project={project} index={index} />
                        )
                    })}
                    
                </div>
            </div>
        </div>
    )
}

export default Portfolio;