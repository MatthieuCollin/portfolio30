import './index.scss'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3, IoLogoJavascript, IoLogoNodejs} from 'react-icons/io'
import {FaReact, FaPhp, FaSymfony} from 'react-icons/fa'
import { MdArrowForwardIos } from 'react-icons/md'
import dateRegex from '../../functions/dateRegex'
import {SiMysql} from 'react-icons/si'
import { FacCaen, dotnet, laposte, logoTips, scholarfab } from '../../assets/img'

const Experiences = (props) =>{
    let skills = props.skills;

    let institutions = props.institutions;

    let schools = institutions.filter((institution)=> institution.type == "school").sort(function(a, b) {
        // Convert the date strings to Date objects
        let dateA = new Date(a);
        let dateB = new Date(b);
      
        // Subtract the dates to get a value that is either negative, positive, or zero
        return  dateB - dateA;
      });;
    let jobs = institutions.filter((institution)=> institution.type == "work").sort(function(a, b) {
        // Convert the date strings to Date objects
        let dateA = new Date(a);
        let dateB = new Date(b);
      
        // Subtract the dates to get a value that is either negative, positive, or zero
        return dateB - dateA;
      });
    // const jobs = [
    //     {
    //         name :'TIPS',
    //         duration: 'Janvier 2023 à Juin 2023',
    //         location: '14000 CAEN',
    //         img: logoTips,
    //         tasks: [
    //             'Réalisation de cahier des charges',
    //             'Réalisation d`une maquette de site web sur Figma',
    //             'Réalisation d`un projet Symfony',
    //             'Réalisation d`une base de données (MysSql)',
    //             'Manipulation d`une API'
    //         ]
    //     },
    //     {
    //         name :'DotNet@Home',
    //         duration: 'Avril 2022 à Mai 2022',
    //         location: '14000 CAEN',
    //         img: dotnet,
    //         tasks: [
    //             'Réalisation d`un site web (HTML, CSS, JS)`',
    //             'Réalisation d`une base de données (MysSql)',
    //             'Réalisation d`une API REST (Node.js)'
    //         ]
    //     },
    //     {
    //         name :'La Poste',
    //         duration: 'Aôut 2022 à Octobre 2022',
    //         location: '14000 CAEN',
    //         img: laposte,
    //         tasks: [
    //             'Oblitération de courrier',
    //             'Trie du courrier',
    //             'Préparation de chantier',
    //         ]
    //     }
    // ];

    // const schools = [
    //     {
    //         name :'Scholar Fab',
    //         duration: 'Octobre 2023 à Juin 2023',
    //         location: '76000 Le Havre',
    //         img: scholarfab,
    //         tasks: [
    //             'Formation : DISII (Développeur Intégrateur de Solutions Intranet et Internet)',
    //             'Niveau : Bac +2',
    //             'Domaine : Informatique',
    //             `Compétences obtenues : Javascript, Php, React, Symfony, Linux`
    //         ]
    //     },
    //     {
    //         name :'Scholar Fab',
    //         duration: 'Décembre 2021 à Mai 2022',
    //         location: '14000 CAEN',
    //         img: scholarfab,
    //         tasks: [
    //             'Formation : SPAMIN (Se Préparer aux Métiers de l`Informatique et du Numérique)',
    //             'Niveau : Bac',
    //             'Domaine : Informatique',
    //             `Compétences obtenues : HTML, CSS, Javascript, Linux`
    //         ]
    //     },
    //     {
    //         name :'Université de Caen',
    //         duration: 'Septembre 2021 à Mai 2021',
    //         location: '14000 CAEN',
    //         img: FacCaen,
    //         tasks: [
    //             'Formation : LEA (Langues Étrangères appliquées)',
    //             'Niveau : Bac+1',
    //             'Domaine : Langues',
    //             `Compétences obtenues : HTM, CSS, Anglais`
    //         ]
    //     }
    // ];

    console.log(schools)


    return(
        <div id='experiences' className="experiences">
            <h2>Expériences</h2>
            <div className="skills">
                <p>Ces projets m'ont permis de développer plusieurs compétences, notamment :</p>
                <h2>Compétences</h2>
                <div className="content">
                    {skills.map((skillData, index)=>{
                        return(
                            <div  key={index + "skill"} className="skill">
                                <img  src={`data:image/svg+xml;base64,${skillData.image}`} />
                                {skillData.name}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="separateur"><div className="bar"></div></div>
            <div className="jobs">
                <div className="companies">
                    <h2>Jobs</h2>
                    {jobs.map((job, index)=>{
                        return(
                            <div key={index + "comapny"} className="company">
                                <h3 key={index}>
                                    {job.name} 
                                    <p>Du {dateRegex(job.beginDate)} au {dateRegex(job.endDate)}</p>
                                </h3>
                                
                                <div key={index + "comapnyContent"} className="content">
                                    <div key={index + "skilljob"} className='skillsJob'>
                                        {job.task.map((task,index)=>{
                                            return(
                                                <p key={index}><MdArrowForwardIos className='arrow'/>{task.name}</p>
                                            )
                                        })}
                                    </div>
                                    <a target="_blank" href={job.link}>
                                        <img src={`data:image/png;base64,${job.image}`} alt="" />
                                    </a>
                                </div>
                            </div>
                        );
                    })}          
                </div>  
                <div className="yBar"></div>
                <div className="companies">
                    <h2>Écoles</h2>
                    {schools.map((school, index)=>{
                        return(
                            <div key={index + "school"} className="company">
                                <h3 key={index + "title"}>
                                    {school.name} 
                                    <p>Du {dateRegex(school.beginDate)} au {dateRegex(school.endDate)}</p>
                                </h3>
                                <div key={index + "schoolContent"} className="content">
                                    <div key={index + "skillSchool"} className='skillsJob'>
                                        {school.task.map((task,index)=>{
                                            return(
                                                    <p key={index}><MdArrowForwardIos className='arrow'/>{task.name}</p>
                                            )
                                        })}
                                    </div>
                                    <a target="_blank" href={school.link}>
                                        <img src={`data:image/png;base64,${school.image}`} alt="" />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Experiences;