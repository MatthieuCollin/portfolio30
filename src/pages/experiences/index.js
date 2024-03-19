import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { FaReact, FaPhp, FaSymfony } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import dateRegex from "../../functions/dateRegex";
import { SiMysql } from "react-icons/si";
import {
  FacCaen,
  dotnet,
  laposte,
  logoTips,
  scholarfab,
} from "../../assets/img";
import Institution from "../../components/institution";
import Skill from "../../components/skill";
import Blank from "../../components/blank";

const Experiences = (props) => {
  let skills = props.skills;

  let institutions = props.institutions;

  let schools = institutions
    .filter((institution) => institution.type === "school")
    .sort((a, b) => {
      // Convert the date strings to Date objects
      let dateA = new Date(a.beginDate);
      let dateB = new Date(b.beginDate);

      // Subtract the dates to get a value that is either negative, positive, or zero
      return dateB - dateA;
    });

  let jobs = institutions
    .filter((institution) => institution.type === "work")
    .sort((a, b) => {
      // Convert the date strings to Date objects
      let dateA = new Date(a.beginDate);
      let dateB = new Date(b.beginDate);

      // Subtract the dates to get a value that is either negative, positive, or zero
      return dateB - dateA;
    });

  return (
    <div id="experiences" className="experiences">
      <Blank />
      <h2>Expériences</h2>
      <Blank />

      <div className="skills">
        <p>
          Ces projets m'ont permis de développer plusieurs compétences,
          notamment :
        </p>
        <Blank />
        <div className="content">
          {skills.map((skillData, index) => {
            return <Skill skillData={skillData} index={index} />;
          })}
        </div>
      </div>
      <div className="separateur">
        <div className="bar"></div>
      </div>
      <div className="jobs">
        <div className="companies">
          <h2>Jobs</h2>
          <Blank />

          {jobs.map((job, index) => {
            return <Institution index={index} institution={job} />;
          })}
          <Blank />
        </div>
        <div className="yBar"></div>
        <div className="companies">
          <h2>Écoles</h2>
          <Blank />

          {schools.map((school, index) => {
            return <Institution index={index} institution={school} />;
          })}
          <Blank />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
