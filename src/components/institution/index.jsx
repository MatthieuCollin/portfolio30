import dateRegex from "../../functions/dateRegex";
import { MdArrowForwardIos } from "react-icons/md";

const Institution = (props) => {
  let institution = props.institution;
  let index = props.index;
  return (
    <div key={index + "institution"} className="company">
      <h3 key={index + "title"}>
        {institution.name}
        <p>
          Du {dateRegex(institution.beginDate)} au{" "}
          {institution.endDate ? dateRegex(institution.endDate) : "En cours"}
        </p>
      </h3>
      <div key={index + "institutionContent"} className="content">
        <div key={index + "skillinstitution"} className="skillsJob">
          {institution.task.map((task, index) => {
            return (
              <p key={index}>
                <MdArrowForwardIos className="arrow" />
                {task.name}
              </p>
            );
          })}
        </div>
        <a target="_blank" href={institution.link}>
          <img src={`data:image/png;base64,${institution.image}`} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Institution;
