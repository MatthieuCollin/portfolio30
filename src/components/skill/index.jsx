const Skill = (props) => {
  let index = props.index;
  let skillData = props.skillData;

  return (
    <div key={index + "skill"} className="skill">
      <img src={`data:image/svg+xml;base64,${skillData.image}`} />
      {skillData.name}
    </div>
  );
};

export default Skill;
