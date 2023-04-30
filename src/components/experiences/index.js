import './index.scss'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3, IoLogoJavascript, IoLogoNodejs} from 'react-icons/io'
import {FaReact, FaPhp, FaSymfony} from 'react-icons/fa'
import { MdArrowForwardIos } from 'react-icons/md'
import {SiMysql} from 'react-icons/si'
import { logoTips } from '../../assets/img'

const Experiences = () =>{
    const skills = [
        {
            icone: <AiFillHtml5 className='icons html'/>,
            skill : <p>HTML5</p>,
        },
        {
            icone: <IoLogoCss3 className='icons css'/>,
            skill: <p>CSS3</p>
        },
        {
            icone:<IoLogoJavascript className='icons js'/>,
            skill: <p>JavaScript</p>
        },
        {
            icone:<IoLogoNodejs className='icons nodejs'/>,
            skill: <p>node.js</p>
        },
        {
            icone:<FaReact className='icons react'/>,
            skill :<p>React</p>
        },
        {
            icone:<FaPhp className='icons php'/>,
            skill: <p>php</p>
        },
        {
            icone: <FaSymfony className='icons symfony'/>,
            skill: <p>Symfony</p>
        },
        {
            icone:<SiMysql className='icons sql'/>,
            skill: <p>Sql</p>
        }
    ];

    const jobs = [
        {
            name :'TIPS',
            duration: 'Janvier 2023 à Juin 2023',
            location: '14000 CAEN',
            img: logoTips,
            tasks: [
                'Réalisation de cahier des charges',
                'Réalisation d`une maquette de site web sur Figma',
                'Réalisation d`un projet Symfony',
                'Réalisation d`une base de données (MysSql)',
                'Manipulation d`une API'
            ]
        },
        {
            name :'TIPS',
            duration: 'Janvier 2023 à Juin 2023',
            location: '14000 CAEN',
            tasks: [
                'Réalisation de cahier des charges',
                'Réalisation d`une maquette de site web sur Figma',
                'Réalisation d`un projet Symfony',
                'Réalisation d`une base de données (MysSql)',
                'Manipulation d`une API'
            ]
        },
        {
            name :'TIPS',
            duration: 'Janvier 2023 à Juin 2023',
            location: '14000 CAEN',
            tasks: [
                'Réalisation de cahier des charges',
                'Réalisation d`une maquette de site web sur Figma',
                'Réalisation d`un projet Symfony',
                'Réalisation d`une base de données (MysSql)',
                'Manipulation d`une API'
            ]
        }
    ];

    const schools = [
        {
            name :'TIPS',
            duration: 'Janvier 2023 à Juin 2023',
            location: '14000 CAEN',
            tasks: [
                'Réalisation de cahier des charges',
                'Réalisation d`une maquette de site web sur Figma',
                'Réalisation d`un projet Symfony',
                'Réalisation d`une base de données (MysSql)',
                'Manipulation d`une API'
            ]
        },
        {
            name :'TIPS',
            duration: 'Janvier 2023 à Juin 2023',
            location: '14000 CAEN',
            tasks: [
                'Réalisation de cahier des charges',
                'Réalisation d`une maquette de site web sur Figma',
                'Réalisation d`un projet Symfony',
                'Réalisation d`une base de données (MysSql)',
                'Manipulation d`une API'
            ]
        },
        {
            name :'TIPS',
            duration: 'Janvier 2023 à Juin 2023',
            location: '14000 CAEN',
            tasks: [
                'Réalisation de cahier des charges',
                'Réalisation d`une maquette de site web sur Figma',
                'Réalisation d`un projet Symfony',
                'Réalisation d`une base de données (MysSql)',
                'Manipulation d`une API'
            ]
        }
    ];


    return(
        <div id='experiences' className="experiences">
            <h2>Expèriences</h2>
            <div className="skills">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing ept. Esse error perspiciatis quos molestiae delectus quis aut, vept id quisquam culpa facere magni iusto, minus beatae, earum quibusdam exercitationem ipsa voluptates.</p>
                <h2>Compétences</h2>
                <div className="content">
                    {skills.map((skillData, index)=>{
                        return(
                            <div className="skill">
                                {skillData.icone}
                                {skillData.skill}
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
                            <div key={index} className="company">
                                <h3 key={index}>
                                    {job.name} 
                                    <p>{job.duration} - {job.location}</p>
                                </h3>
                                
                                <div key={index} className="content">
                                    <div className='skillsJob'>
                                        {job.tasks.map((task,index)=>{
                                            return(
                                                    <p key={index}><MdArrowForwardIos className='arrow'/>{task}</p>
                                            )
                                        })}
                                    </div>
                                    <img src={logoTips} alt="" />
                                </div>
                            </div>
                        );
                    })}          
                </div>
                <div className="yBar"></div>
                <div className="schools">
                    <h2>Écoles</h2>
                    {schools.map((school, index)=>{
                        return(
                            <div key={index} className="school">
                                <h3 key={index}>
                                    {school.name} 
                                    <p>{school.duration} - {school.location}</p>
                                </h3>
                                <div key={index} className="content">
                                    <div className='skillsJob'>
                                        {school.tasks.map((task,index)=>{
                                            return(
                                                    <p key={index}><MdArrowForwardIos className='arrow'/>{task}</p>
                                            )
                                        })}
                                    </div>
                                    <img src={logoTips} alt="logo tips" />
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