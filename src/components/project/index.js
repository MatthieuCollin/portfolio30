const Project = (props) => {
  let index = props.index;
  let project = props.project;

  return (
    <div
      key={index + "project"}
      style={{
        backgroundImage: `url("/static/media/${project.name
          .toLowerCase()
          .split(" ")
          .join("_")}.png")`,
      }}
      className="work cd"
    >
      <div className="links">
        <a href={project.githubLink} target="_blank">
          Github
        </a>
        <a href={project.websiteLink} target="_blank">
          Site
        </a>
      </div>
    </div>
  );
};

export default Project;
