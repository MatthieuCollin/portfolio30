import { erwan, melvin, nico, profil } from '../../assets/img';
import {MdArrowForwardIos} from 'react-icons/md'
import './index.scss'

const Profil = () =>{

    const persons = [
        {
            profil: nico,
            name : "Nicolas Lambert",
            summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nulla dolorum molestiae, laborum, fugiat optio, iusto quisquam cum quae dignissimos magnam distinctio vero qui ut labore nobis tenetur. Harum, nemo."
        },
        {
            profil: nico,
            name : "Nicolas Lambert",
            summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nulla dolorum molestiae, laborum, fugiat optio, iusto quisquam cum quae dignissimos magnam distinctio vero qui ut labore nobis tenetur. Harum, nemo."
        },
        {
            profil: nico,
            name : "Nicolas Lambert",
            summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni nulla dolorum molestiae, laborum, fugiat optio, iusto quisquam cum quae dignissimos magnam distinctio vero qui ut labore nobis tenetur. Harum, nemo."
        },
    ];



    return(
        <div id='profil' className='profilBox'>
            <h2 >PROFIL</h2>
            <div className="content">
                <div className="about">
                    <div className="informations">
                        <img src={profil} alt="profil" />
                        <div className="details">
                            <h3> Développeur web, Javascript/PHP</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate quos porro odio debitis incidunt consequatur reprehenderit rerum accusantium dicta, omnis qui dolorem voluptas quasi commodi excepturi maiores mollitia consectetur sunt?</p>
                            <ul>
                                <li> <MdArrowForwardIos className='arrow'/> Age :<span>21 ans</span></li>
                                <li> <MdArrowForwardIos className='arrow'/> Ville :<span>Caen</span> </li>
                                <li> <MdArrowForwardIos className='arrow'/> École :<span>Scholar fab</span></li>
                                <li> <MdArrowForwardIos className='arrow'/>  Mail :<span>matthcollin6@gmail.com</span> </li>
                                <li> <MdArrowForwardIos className='arrow'/>  Télephone :<span> 06.23.50.77.61</span> </li>
                                <li> <MdArrowForwardIos className='arrow'/>  Site Web :<span>www.devwebcollin.fr</span> </li>
                            </ul>
                            </div>
                        </div>
                    <p>
                            En tant que développeur web, je suis quelqu'un de sociable, curieux et patient. Ces talents me permettent de travailler efficacement en équipe, de m'adapter rapidement aux nouvelles technologies et de résoudre les problèmes avec patience et persévérance.
                            Dans cette optique, j'ai eu la chance de travailler avec des professionnels exceptionnels, qui m'ont appris beaucoup de choses sur la programmation, la conception de sites web et la gestion de projets. Je suis fier de pouvoir compter sur leurs recommandations pour attester de mon expertise et de mes compétences.
                    </p>
                </div>
            </div>
            <div className="separateur">
                <div className="bar"></div>
            </div>
            <div className="reco">
                <h2>Voici un retour des personne avec qui j'ai pu travailler: </h2>
                <div className="content">
                    {persons.map((person, index)=>{
                        return(
                            <div className="person">
                                <img src={person.profil} alt="profil" />
                                <h3>{person.name}</h3>
                                <p>{person.summary}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Profil;