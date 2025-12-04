import Blank from "../../components/blank";
import Project from "../../components/project";

const Portfolio = (props) => {
  let data = props.works;

  return (
    <div id="portfolio" className="portfolio">
      <Blank />
      <h2 id="portfolio">PORTFOLIO</h2>
      <Blank />

      <div className="content">
        <p>
          Voici les travaux que j'ai pu réaliser tout au long de mon parcours :
        </p>
        <Blank />

        <div className="works">
          {data.map((project, index) => {
            return <Project project={project} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
